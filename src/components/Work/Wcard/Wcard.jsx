import React from 'react'
import './Wcard.css'
function Wcard(props) {
  return (       
    <div className="tl">
      <div className="tr-box">
        <span>{props.head}</span>
<span>{props.d1}<br/>{props.d2}<br/>{props.d3}</span>
      </div>

 
     
 
 </div>
  )
}

export default Wcard