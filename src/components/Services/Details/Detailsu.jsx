import React from 'react'
import './Detailsu.css'
function Detailsu(props) {
  return (
    <>
     <div className='su-details'>
        <div className="su-box">

    <span>{props.heading}</span>
    <span>{props.desc}</span>
        </div>
    </div>

    </>
   
  )
}

export default Detailsu