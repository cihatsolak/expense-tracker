import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot, snapshotEqual } from 'firebase/firestore'

export default function useCollection(collectionId) {
    const [documents, setDocuments] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);

        let ref = collection(db, collectionId);
        const unSubscribe = onSnapshot(ref, snapshot => {
            let results = [];
            snapshot.docs.forEach(doc => {
                results.push({
                    ...doc.data(),
                    id: doc.id
                })
            })

            setDocuments(results);
            setErrorMessage(null);
        }, error => {
            setErrorMessage(error.message)
        })

        setLoading(false);
        
        return () => unSubscribe();
    }, [collectionId])

    return { documents, errorMessage, loading };
}
