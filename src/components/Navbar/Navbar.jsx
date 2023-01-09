import React from "react";
import {Link} from 'react-scroll'
import './Navbar.css'
import img from './IMG/clapingoLogo.png'
import Login from "../Login/Login";

// import  "./img/clapingoLogo.png"

function Navbar() {
  return (
    <>
      <div className="header">
      <div className="left">
            <img src={img} />
            
        </div>
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Plans & Pricing</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Teach with us</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Affiliate Program</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Kids</li>
            </Link>
            
          </ul>
        
        </div>
        
        <a href="/login"><Login/></a>
      </div>
    </>
  );
}

export default Navbar;
