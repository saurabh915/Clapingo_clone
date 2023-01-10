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

   <div className="i1"><img  className='img1'/> <Detailsu heading = "Customised Curriculum " desc1 = "Customised sessions and module "desc2 = "for Basic, Intermediate and Advancedd"  desc3 = "learners."/></div>
   <div className="i2"> <img  className='img2'/> <Details heading = "Experimental Learning " desc1 = "Do not study English, rather consume" desc2 ="and use it."/></div>
   <div className="i3"> <img  className='img3'/> <Detailsd heading = "Shadowing Method" desc1 = "Think and speak in English rather" desc2 = "than translating it from mother tongue."/></div>

  
  
  </div>


  )
}

export default Services