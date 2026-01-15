import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar'

import Gallery from './pages/Gallery';
import About from './pages/About';
import Booking from './pages/Booking';
import FAQ from './pages/FAQ';
import Merch from './pages/Merch';

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Gallery />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Booking' element={<Booking />}/>
          <Route path='/FAQ' element={<FAQ />}/>
          <Route path='/Merch' element={<Merch />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
