import React from 'react'
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'

import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'

import { Footer } from './components/Footer'
import { RepairServices } from './components/RepairServices'
import { CommandVehicles } from './components/CommandVehicles'




export default function App() {
  return (
    <div>
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/contact" element={<Contact />} />
          <Route path="/repair" element={<RepairServices />} />
          <Route path="/repair" element={<RepairServices />} />
          <Route path="/comand-vehicles" element={<CommandVehicles />} />

          

        </Routes>
        </Router>
      </div>
    
  )
}
