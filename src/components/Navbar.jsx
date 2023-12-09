import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/portfolio" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>MS</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/experience" className={({ isActive })=> isActive ? "text-blue-500" : "text-black"}>
                Experience
            </NavLink>
            <NavLink to="/projects" className={({ isActive })=> isActive ? "text-blue-500" : "text-black"}>
                Projects
            </NavLink>
            <NavLink to="/Contact" className={({ isActive })=> isActive ? "text-blue-500" : "text-black"}>
                Contact
            </NavLink>

        </nav>
    </header>
  )
}

export default Navbar
