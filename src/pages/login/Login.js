import React from 'react'
import './Login.module.css'
import { Container, Typography, Button, FormControl, FilledInput, InputLabel } from '@mui/material'

export default function Login() {
  return (
    <Container>
      <form>
        <Typography sx={{ mt: 15, ml: 5, fontWeight: 'bold' }} variant="h4" color="darkslateblue">Login</Typography>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput
            id="email"
            label="Email"
          />
        </FormControl>

        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <FilledInput
            id="password"
            label="password"
          />
        </FormControl>
        <Button variant="outlined" type="submit" color="info" size="large" sx={{ mt: 5 }}>Login</Button>
      </form>
    </Container>
  )
}
