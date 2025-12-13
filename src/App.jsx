import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Styles from "./App.module.css"

import NavBar from './components/NavBar'

import HomePage from './pages/Gallery';

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
