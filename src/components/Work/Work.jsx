import React from 'react'
import Wcard from './Wcard/Wcard'
import './Work.css'
function Work() {
  return (
    <>
    <div className="work">
    <span>How it works ?</span> 
    <div className="c-work">
    <div className="blur" ></div>
     <img className='centerI' />
     <div className="tl">
      <div className="tr-box">
        <span>1. Create Account</span>
<span>Create your account using phone<br/> number or email and take a free trial<br/> at ₹1.</span>
      </div>

 
     </div>
     <div className="bl">
     <div className="tr-box">
        <span>3. Select time slot</span>
<span>Subscribe & select any time slot between 10 AM to 12 midnight. </span>
      </div>
   </div>
   <div className="tr">
   <div className="tr-box">
        <span>2. Subscribe</span>
<span>Choose your preferred duration and select subscription package for your sessions. </span>
      </div>

     </div>
     <div className="br">
     <div className="tr-box">
        <span>4. You are done</span>
<span>That’s it! Start practicing and reach your learning goal in speaking. </span>
      </div>

     </div>
    

    </div>

  
    </div>
    </>
  )
}

export default Work