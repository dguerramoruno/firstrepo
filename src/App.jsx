import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const Mensaje = () => {
  return(
    <h1>Hola Mundo</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Mensaje />
      <Mensaje />
      <Mensaje />
    </div>
  )
}

export default App
