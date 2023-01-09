import React from 'react'
import './Services.css'
import './IMG/1.png'
import './IMG/2.png'
import './IMG/3.png'
import Details from './Details/Details'
import Detailsu from './Details/Detailsu'
import Detailsd from './Details/Detailsd'
function Services() {
  return (
  <div className="ser-sec">
    
   <span>What we offer ?</span> 
   <div className="i1"><img  className='img1'/> <Detailsu heading = "Customised Curriculum " desc = "Customised sessions and module for Basic, Intermediate and Advanced learners."/></div>
   <div className="i2"> <img  className='img2'/> <Details heading = "Experimental Learning " desc = "Do not study English, rather consume and use it."/></div>
   <div className="i3"> <img  className='img3'/> <Detailsd heading = "Shadowing Method" desc = "Think and speak in English rather than translating it from mother tongue."/></div>

  
  
  </div>


  )
}

export default Services