import { useEffect, useState, useReducer } from 'react'
import { db } from '../firebase/config'
import { doc, collection, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'

const initialData = {
    document: null,
    loading: false,
    errorMessage: null,
    succeeded: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'WAITING':
            return {
                document: null,
                loading: true,
                errorMessage: null,
                succeeded: null
            };
        case 'DOCUMENT_ADDED':
            return {
                document: action.payload,
                loading: false,
                errorMessage: null,
                succeeded: true
            };
        case 'DOCUMENT_DELETED':
            return {
                document: null,
                loading: false,
                errorMessage: null,
                succeeded: true
            };
        case 'ERROR':
            return {
                document: null,
                loading: false,
                errorMessage: action.payload,
                succeeded: false
            };
        default:
            return state
    }
}

export function useFirestore(collectionId) {
    const [data, dispatch] = useReducer(firestoreReducer, initialData);
    const [cancel, setCancel] = useState(false)

    const ref = collection(db, collectionId);

    const addDocument = async (document) => {
        dispatch({
            type: 'WAITING'
        })

        try {
            const creationDate = serverTimestamp();
            const addedDocument = await addDoc(ref, {
                ...document,
                creationDate
            });
            if (!addedDocument) {
                throw new Error('An error occurred while adding the document.');
            }

            dispatch({
                type: 'DOCUMENT_ADDED',
                payload: addedDocument
            })
        }
        catch (error) {
            if (!cancel) {
                dispatch({
                    type: 'ERROR',
                    payload: error.message
                })
            }
        }
    }

    const deleteDocument = async (id) => {
        dispatch({
            type: 'WAITING'
        })

        try {
            let ref = doc(db, collectionId, id);
            await deleteDoc(ref);
            dispatch({
                type: 'DOCUMENT_DELETED',
            })
        }
        catch (error) {
            if (!cancel) {
                dispatch({
                    type: 'ERROR',
                    payload: error.message
                })
            }
        }
    }

    useEffect(() => {
        return () => setCancel(true)
    }, [])

    return { addDocument, deleteDocument, data }
}
