import { useState, useEffect } from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Form() {

    const { user } = useAuthContext();
    const { addDocument, data } = useFirestore('expense');
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        await addDocument({ uid: user.uid, title, quantity });
    }

    useEffect(() => {
        if (data.succeeded) {
            setTitle('');
            setQuantity('');
        }
    }, [data.succeeded]);

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant="h6" color="darkslateblue" >Enter Expense Information</Typography>
            <TextField
                label="Expense Title"
                variant="standard"
                fullWidth
                required
                onChange={(event) => setTitle(event.target.value)}
                value={title}
            />
            <TextField
                label="Expense Quantity"
                variant="standard"
                fullWidth
                required
                onChange={(event) => setQuantity(event.target.value)}
                value={quantity}
                sx={{ my: 5 }}
            />
            <Button variant="contained" color="secondary" type="submit">Add</Button>
        </form>
    )
}