//import logo from './logo.svg';
import './App.css';
import {ReducerContext} from "./components/reducer/reducer.jsx"
import { useEffect, useContext } from 'react'
import BASE_URL from "./config.js"
import React from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Inscription from './components/Inscription'
import Connexion from './components/Connexion'

const App = () => {
 
return (
  
  <BrowserRouter>
   
      <Navbar />
      
      { /* Routes et Route définie les routes */ }
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Inscription' element={<Inscription />} />
        <Route path='/Connexion' element={<Connexion />} />
        
       { /* Gestion de la route 404 ou des routes qui ne "match" pas avec l'attribut path et l'opérateur (*) */ }
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    
  </BrowserRouter>
  
  )
}

export default App

