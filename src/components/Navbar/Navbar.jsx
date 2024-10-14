import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const[menu,setMenu] = useState("Menu")

  return (
    <div className='navbar'>
      {/* <img src={assets.logo} alt="" /> */}
     <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Acceuil</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        {/* <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li> */}
        <a href="#footer" onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icons'>
         <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className='dot'></div>
        </div>
        <button  onClick={()=>setShowLogin(true)}>Se connecter</button>
      </div>
    </div>
  )
}

export default Navbar
 