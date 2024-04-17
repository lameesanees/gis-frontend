import './App.css'
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Info from './Pages/Info'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import { Navigate } from 'react-router-dom'
function App() {
  
  return (
    <>
     <Header/>
     <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/login'} element={<Auth />} />
      <Route path={'/register'} element={<Auth register />} />
      <Route path={'/info'} element={<Info />} />
      <Route path={'*'} element={<Navigate to ={'/'} />}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
