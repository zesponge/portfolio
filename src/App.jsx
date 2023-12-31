import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Experience, Projects, Contact } from './pages/index.js';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/portfolio' element={<Home/>}/>
                <Route path='/experience' element={<Experience/>}/>\
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </Router>
    </main>
  )
}

export default App
