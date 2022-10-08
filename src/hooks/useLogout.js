import React from 'react'
import useAuthContext from './useAuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

export default function useLogout() {
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
