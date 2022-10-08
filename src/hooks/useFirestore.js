import { useEffect, useState, useReducer } from 'react'
import { db } from '../firebase/config'
import { collection } from 'firebase/firestore'

const initialData = {
    document: null,
    loading: false,
    errorMessage: null,
    succeeded: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default function useFirestore(collectionId) {
    const [data, dispatch] = useReducer(firestoreReducer, initialData);
    const [cancel, setCancel] = useState(false)

    const ref = collection(db, collectionId);

    const addDocument = async (document) => {

    }

    const deleteDocument = async (id) => {

    }

    useEffect(() => {
        return () => setCancel(true)
    }, [])

    return { addDocument, deleteDocument, data }
}
