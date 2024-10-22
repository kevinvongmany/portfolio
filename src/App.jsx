import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <>
      <Header />
      <AnimatePresence>
          <Outlet />
      </AnimatePresence>
    </>
  )
}

export default App
