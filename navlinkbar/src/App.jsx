/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main className="py-4 px-4 md:px-8"><Outlet></Outlet></main>
      
    </>
  )
}

export default App
