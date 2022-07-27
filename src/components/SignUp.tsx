import { Button, Form, Input, message, Space, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const showError = (errorMessage: string) => {
    message.error(errorMessage);
};

const SignUp = () => {
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        try {
            await api.post("/users/register", values);
            navigate('/login');
        }
        catch (err: any) {
            console.log({ err });
            showError(err.response.data.errorMessage)
        }
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Register for an account</h2>
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name='email' label="Email" rules={[{ type: 'email', required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name='fullname' label="Full Name">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUp;