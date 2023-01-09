import React from 'react'
import './Detailsd.css'
function Detailsd(props) {
  return (
    <>
     <div className='sd-details'>
        <div className="sd-box">

    <span>{props.heading}</span>
    <span>{props.desc}</span>
        </div>
    </div>

    </>
   
  )
}

export default Detailsd