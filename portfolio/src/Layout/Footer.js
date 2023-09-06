import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className='footer-container'>
         <div className='logo-container'>
          Dribble
        </div>
        <nav className='nav-container'>
             <ul className='nav-items'>
                <li> For Designers</li>
                <li> Hire Talent</li>
                <li> Insipiration</li>
                <li>Advertising</li>
                <li> Blog</li>
                <li> About</li>
                <li> Careers</li>
                <li> Support</li>             
            </ul>
        </nav>
        <nav className='nav-container'>
            <ul className='social-items'>
             <li><FacebookIcon/> </li>
             <li><InstagramIcon/></li>
             <li><TwitterIcon/></li>
            </ul>

        </nav>
       



    </div>
  )
}

export default Footer