import { useState } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const { dispatch } = useAuthContext();

    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(null);

    const login = async (email, password) => {
        setLoading(true);
        setErrorMessage(null);

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            if (!response) {
                throw new Error('There was an error in the login process.');
            }

            dispatch({
                type: 'LOGIN',
                payload: response.user
            })
        }
        catch (error) {
            setErrorMessage(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return { login, errorMessage, loading }
}