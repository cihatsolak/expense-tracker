import { List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

export default function ExpenseList({ expenses }) {
    return (
        <List>
            {
                expenses && expenses.map((expense) => (
                    <React.Fragment key={expense.id}>
                        <ListItem secondaryAction={
                            <IconButton edge="end" aria-label="delete">
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