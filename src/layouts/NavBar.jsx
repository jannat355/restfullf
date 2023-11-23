import React from 'react'
import { Link } from 'react-router-dom'
import  '../style/NavBar.css'
import navlogo from '../assets/img3.jpeg'
import face from '../assets/img4.jpeg'

const NavBar = () => {
  return (
    <nav className='border-bottom border-2 border-success'>
      <div className='container d-flex justify-content-between align-items-center'>
      <div>
            <Link to='/'>
            <img src={navlogo} alt="navlogo" className='img-fluid py-3  '/>
            </Link>
      </div>
      <ul className='d-flex gap-3 align-items-center '>
        
          <Link to='/NewUser' className='link'><li>New User</li></Link>
        
        
          <Link to='/AllUsers' className='link'><li>All Users</li></Link>
        
        <li className='link d-lg-block d-none img-fluid'>
          <img src= {face}alt=" face" />
        </li>
      </ul>
      </div>
    </nav>

  )
}

export default NavBar