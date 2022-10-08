import { useState } from 'react'
import { auth } from '../firebase/config'
import {signOut} from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(null);

    const logOut = async () => {
        try {
            setErrorMessage(null);

            await signOut(auth);
            dispatch({
                type: 'LOGOUT'
            })
        }
        catch (error) {
            setErrorMessage(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return { logOut, errorMessage, loading }
}
