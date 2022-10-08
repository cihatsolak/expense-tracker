import { List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { useFirestore } from '../../hooks/useFirestore';

export default function ExpenseList({ expenses }) {
    const { deleteDocument } = useFirestore('expense');

    return (
        <List>
            {
                expenses && expenses.map((expense) => (
                    <React.Fragment key={expense.id}>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteDocument(expense.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }>
                            <ListItemText primary={expense.title} secondary={expense.quantity} />

                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))
            }
        </List>
    )
}