import React from "react"
import { Link } from "react-router-dom"
import logo from "./github.png"

const Navbar = () => {
  return (
    <div className='bg-[#262932] py-5'>
      <header className='flex items-center m-auto text-center text-xl max-w-7xl text-gray-50'>
        <img src={logo} className='h-6 w-6 mr-3' alt='userImage' />
        <h1 className='mr-[50rem] font-bold'>GitHub</h1>
        <nav className=''>
          <ul className='flex px-10'>
            <li className='px-10 mr-8'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
