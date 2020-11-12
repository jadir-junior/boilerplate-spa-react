import React from 'react'
import './App.css'
import Logo from './components/Logo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p aria-label="Boilerplate criado por Jadir Junior">
          Boilerplate criado por Jadir Junior!
        </p>
      </header>
    </div>
  )
}

export default App
