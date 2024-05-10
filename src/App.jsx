import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'
import ContactMe from './pages/ContactMe'

const App = () => {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-me/*' element={<AboutMe />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/contact-me' element={<ContactMe />} />
         </Routes>
      </>
   )
}

export default App
