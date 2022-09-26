//import logo from './logo.svg';
import './App.css';
import {ReducerContext} from "./components/reducer/reducer.jsx"
import { useEffect, useContext } from 'react';
import BASE_URL from "./config.js"
import React from 'react'


function App() {
    const [state, dispatch] = React.useContext(ReducerContext)

  useEffect(() => {
    fetch(`${BASE_URL}/courses`)
      .then(response => response.json())
      .then(res => {
          dispatch({type:"test",payload:res})
      })

  },[])


  return (
    <ul>
    {console.log(state.todo)}
      {
        state.todo.map((l, i) => <li key={i}>{l}</li>
      )}
    </ul>
  )

}

export default App
