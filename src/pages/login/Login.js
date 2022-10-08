import React, { useState } from 'react'
import './Login.module.css'
import { Container, Typography, Button, FormControl, FilledInput, InputLabel } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { InputAdornment, IconButton } from '@mui/material'

export default function Login() {

  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
    showPassword: false
  })

  const handleChange = (prop) => (event) => {
    setFormInputs({ ...formInputs, [prop]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInputs);
  }

  const handleClickShowPassword = () => {
    setFormInputs({
      ...formInputs,
      showPassword: !formInputs.showPassword
    })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography sx={{ mt: 15, ml: 5, fontWeight: 'bold' }} variant="h4" color="darkslateblue">Login</Typography>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput
            id="email"
            label="Email"
            value={formInputs.email}
            onChange={handleChange('email')}
          />
        </FormControl>

        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <FilledInput
            id="password"
            type={formInputs.showPassword ? 'text' : 'password'}
            label="password"
            value={formInputs.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                  <IconButton
                  aria-label="toggle password"
                  onClick={handleClickShowPassword}
                  edge="end"
                  >
                  {formInputs.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
              </InputAdornment>
              }
          />
        </FormControl>
        <Button variant="outlined" type="submit" color="info" size="large" sx={{ mt: 5 }}>Login</Button>
      </form>
    </Container>
  )
}
