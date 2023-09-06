import React from 'react'
import './Page1.css'

const Page1 = () => {
  return (
     <div className="sub-details-container">
    <div className="sub-details-header">
        <ul className="ul-container">
            <li className="sub-li">Emotions</li>
            <li className="sub-li">Manifesto</li>
            <li className="sub-li">Self-awareness Test</li>
            <li className="sub-li">Work With us</li>

        </ul>
        
        <button className="btn-download">Download App</button>
     </div>
      <div className="sub-details-content">
                   content
    </div>
     </div>
  )
}

export default Page1