import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center pt-12 pb-12">
      <AnimatePresence>
          <Outlet />
      </AnimatePresence>
      </div>
      <Footer />
    </>
  )
}

export default App
