import { Button, Checkbox, Form, Input, Result } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signIn } from '../store/actions/userActions';
import { SignInForm, UserDispatch } from '../types/user';
import { showError, showSuccess } from '../utils/notification'
import { AppState } from '../store';
import { useEffect } from 'react';

const SignIn = () => {

    const navigate = useNavigate();
    const location: any = useLocation();
    const dispatch = useDispatch<UserDispatch>();

    const { data, loading, error } = useSelector((state: AppState) => state.user);

    const onFinish = (values: SignInForm) => {
        dispatch(signIn(values));
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            navigate('/')
        }
    }, [data])

    useEffect(() => {
        error && showError(error)
    }, [error])

    useEffect(() => {
        data.username && showSuccess('You have successfully logged in!');
    }, [data.username])

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
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