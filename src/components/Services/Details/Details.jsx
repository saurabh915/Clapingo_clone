import React from 'react'
import './Details.css'
function Details(props) {
  return (
    <>
     <div className='s-details'>
        <div className="s-box">

    <span>{props.heading}</span>
    <span>{props.desc}</span>
        </div>
    </div>

    </>
   
  )
}

export default Details