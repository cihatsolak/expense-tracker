import React, { useState } from 'react'
import './Register.module.css'
import { Container, Typography, Button, FormControl, OutlinedInput, InputLabel } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { InputAdornment, IconButton } from '@mui/material'
import useRegister from '../../hooks/useRegister'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate();
  const { signUp, errorMessage, loading } = useRegister();

  const [formInputs, setFormInputs] = useState({
    email: '',
    password: '',
    username: '',
    showPassword: false
  })

  const handleChange = (prop) => (event) => {
    setFormInputs({ ...formInputs, [prop]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await signUp(formInputs.email, formInputs.password, formInputs.username);
    navigate('/');
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
        <Typography sx={{ mt: 15, ml: 5, fontWeight: 'bold' }} variant="h4" color="darkslateblue">Register</Typography>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            label="Email"
            value={formInputs.email}
            onChange={handleChange('email')}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
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

        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput
            id="username"
            label="username"
            value={formInputs.username}
            onChange={handleChange('username')}
          />
        </FormControl>

        {!loading && <Button variant="outlined" type="submit" color="info" size="large" sx={{ mt: 5 }}>Register</Button>}
        {loading && <Button variant="outlined" disabled type="submit" color="info" size="large" sx={{ mt: 5 }}>Loading</Button>}

        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </Container>
  )
}
