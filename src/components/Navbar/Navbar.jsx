import React from "react";
import {Link,useLocation,useNavigate} from 'react-router-dom'
import "./Navbar.css";
import img from "./IMG/clapingoLogo.png";
import Login from "../Login/Login";

// import  "./img/clapingoLogo.png"

function Navbar() {
  let navigate = useNavigate();
  const handlelogout = ()=>{
    localStorage.removeItem('data');
    navigate('/login');

  } 
  return (
    <>
      <nav className="header">
        <div className="left">
         <a href="/"><img src={img} /></a> 
        </div>
        <div className="n-list">
          <ul>
         
              <li>Plans & Pricing</li>
           
           
              <li>Teach with us</li>
           
         
              <li>Affiliate Program</li>
        
           
              <li>Kids</li>
           
          </ul>
        </div>
        {!localStorage.getItem('data')?
        <a href="/login">
          <Login h ="Login" />
        </a>
          

          // : <button onClick={handlelogout}className = "btn btn-primary">Logout</button>} 
          : <div onClick={handlelogout}><Login h ="Logout"  /></div>}
      
      </nav>
    </>
  );
}

export default Navbar;
