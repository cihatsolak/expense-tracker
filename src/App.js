import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Container from '@mui/material/Container';
import { useAuthContext } from './hooks/useAuthContext'

export default function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <>
          <BrowserRouter>
            <Navbar />
            <Container>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </Container>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}