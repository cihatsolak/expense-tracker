import { Container, Grid, Paper } from '@mui/material';
import Form from './Form';
import './Home.module.css';
import ExpenseList from './ExpenseList';
import useCollection from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Home() {
  const { user } = useAuthContext();
  const { documents, errorMessage, loading } = useCollection('expense', ["uid", "==", user.uid]);

  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={10}>
        <Grid item md={8} sm={12} xs={12}>
          {errorMessage && <p>{errorMessage}</p>}
          {documents &&
            <ExpenseList expenses={documents} />
          }
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Form uid={user.uid} />
        </Grid>
      </Grid>
    </Container>
  )
}