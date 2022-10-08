import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Container from '@mui/material/Container';
import { useAuthContext } from './hooks/useAuthContext'

export default function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <>
          <BrowserRouter>
            <Navbar />
            <Container>
              <Routes>
                <Route path='/' element={user ? <Home /> : <Login />} />
                <Route path='/login' element={!user ? <Login /> : <Home />} />
                <Route path='/register' element={!user ? <Login /> : <Home />} />
              </Routes>
            </Container>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}