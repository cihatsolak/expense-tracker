import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function useAuthContext() {

    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('Context not found.')
    }

    return context;
}
