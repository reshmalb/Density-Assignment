import React,{useState} from 'react'
import './Header.css'

const Header = () => {
    const [isClicked,setIsClicked]=useState(false)
    const [isNavBarClicked,setNavBarClicked]=useState(true)

  return (
    <div className='header-container'>
        <div className='logo-container'>
          Dribble
        </div>
        <nav className='nav-container'>
             <ul className='nav-items'>
                <li> Find Talent</li>
                <li> For Designers</li>
                <li> Insipiration</li>
                <li>Learn Design</li>
                <li> Go Pro</li>
             
            </ul>
        </nav>
        <nav className='nav-container'>
        <ul className='nav-items'>
             <li>Log in</li>
                <button className='btn-signup'>Sign Up</button>

            </ul>
        </nav>
        <div id="mobile" onClick={()=>setIsClicked((prev)=> !prev)}>
             <i id="bar" className={isClicked===true ? "fa fa-times": "fa fa-bars"} >

             </i>
             </div>
    </div>
  )
}

export default Header