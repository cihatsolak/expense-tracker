import { Button, Checkbox, Form, Input, Result } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { showError } from '../utils/notification'

const SignIn = () => {

    const navigate = useNavigate();
    const location: any = useLocation();

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        try {
            await api.post('/users/login', values);
            navigate('/');
        } catch (err: any) {
            showError(err.response.data.errorMessage);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        showError(errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Please Login</h2>
            {
                location?.state?.newSignUp && (
                    <Result
                        status="success"
                        title="Yo successfully signed up!"
                        subTitle="Please login using your credentials"
                    />
                )
            }

            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SignIn