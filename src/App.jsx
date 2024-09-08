
import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './comp/Navbar/Navbar'
import AppRoutes from './routes/Routes'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  
  return (
    
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
