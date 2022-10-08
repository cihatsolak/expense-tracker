import { useState } from 'react'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export default function useRegister() {
    const { dispatch } = useAuthContext();

    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(null);

    const signUp = async (email, password, displayName) => {
        setErrorMessage(null);
        setLoading(true);

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            if (!response) {
                throw new Error('An error occurred while registering.')
            }

            await updateProfile(response.user, { displayName });
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

    return { signUp, errorMessage, loading }
} 
