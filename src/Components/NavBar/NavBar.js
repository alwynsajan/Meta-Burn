import React from 'react'
import './NavBar.css';
import MetaBurnLogo from '../../Assets/Images/MBLogo.png';

function NavBar() {
  return (
    <div className = "navbar">
        <img className='logo' src={MetaBurnLogo} alt="Meta Burn Logo" />
        <button className='logoutButton'>Log Out</button>
      
    </div>
  )
}

export default NavBar
