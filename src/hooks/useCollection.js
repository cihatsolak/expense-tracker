import { useEffect, useState, useRef } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export default function useCollection(collectionId, _query) {
    const [documents, setDocuments] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(null);

    const q = useRef(_query).current;

    useEffect(() => {
        setLoading(true);

        let ref = collection(db, collectionId);
        if (q) {
            ref = query(ref, where(...q))
        }

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
