import { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material';

export default function Form() {

    const [title, setTitle] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ title, quantity });
    }

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