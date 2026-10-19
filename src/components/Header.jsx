import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[white] ">
      <div className="navbar flex justify-center m-auto max-w-6xl px-4 ">
        <div className="flex-1">
          <Link className=" text-xl" to="/"><img className='w-[177px] h-[50px]'  src={Logo} alt="" /></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-[#292F36]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/servise">Servise</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header