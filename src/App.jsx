import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Cards from './pages/cards'
import SingleCards  from './pages/single-cards'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App