import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>HotelView</div>
      <div className='filler'></div>
      <div className='navbar-options'>
        <button className='nav-button'>Sign Out</button>

        <button className='nav-button'>Sign Up / Sign In</button>

        <button className='nav-button'>Favourites</button>
        <button className='nav-button'>Main Page</button>
      </div>
    </div>
  )
}

export default Navbar
