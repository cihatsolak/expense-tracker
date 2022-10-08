import React, { useState } from 'react'
import { auth } from '..firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function useRegister() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(null);

    const signUp = async (email, password, displayName) => {
        setErrorMessage(null);
        setLoading(true);

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response.user);

            if (!response) {
                throw new Error('An error occurred while registering.')
            }

            await updateProfile(response.user, { displayName });
        }
        catch (error) {
            setErrorMessage(error.errorMessage);
            console.error(error.errorMessage);
        }
        finally {
            setLoading(false);
        }
    }

    return { signUp, errorMessage, loading }
} 
