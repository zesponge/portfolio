import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from './pages/index.js';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path='/portfolio' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>\
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </Router>
    </main>
  )
}

export default App
