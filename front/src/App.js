// Import des modules 

//import logo from './logo.svg';
import './App.css'
import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Routeur from "./components/Routeur"
import Footer from "./components/Footer"

const App = () => {
 
return (
  
  <BrowserRouter>
      
      <Navbar />
      <Routeur />
      <Footer />
  </BrowserRouter>
  
  )
}

export default App

