import { Container, Grid, Paper } from '@mui/material';
import Form from './Form';
import './Home.module.css';
import ExpenseList from './ExpenseList';
import useCollection from '../../hooks/useCollection';

export default function Home() {
  const { documents, errorMessage, loading } = useCollection('expense');
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
          <Form />
        </Grid>
      </Grid>
    </Container>
  )
}