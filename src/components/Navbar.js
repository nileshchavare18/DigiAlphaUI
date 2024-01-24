import React from 'react'
import "./css/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'><img src='digi_logo_dark.png' alt='digi_logo_dark.png'></img> </div>
      <div className='nav'>
        <ul className='nav-items'>
            <li className='item'>Home</li>
            <li className='item'>Services</li>
            <li className='item'>Feature</li>
            <li className='item'>Product</li>
            <li className='item'>Testimonial</li>
            <li className='item'>FAQ</li>          
        </ul>
      </div>
      <div className='buttons'>
        <button className='plain-btn'>Login</button>
        <button className='small-btn'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
