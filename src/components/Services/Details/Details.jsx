import React from 'react'
import './Details.css'
function Details(props) {
  return (
    <>
     <div className='s-details'>
        <div className="s-box">
        <div className="heads">
    <span>{props.heading}</span>
    </div>
    <div className="description">   
     <span>{props.desc1}</span>
    <span>{props.desc2}</span>
    <span>{props.desc3}</span>
        </div>
    </div>
</div>
    </>
   
  )
}

export default Details