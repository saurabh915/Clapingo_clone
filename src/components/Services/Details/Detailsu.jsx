import React from 'react'
import './Detailsu.css'
function Detailsu(props) {
  return (
    <>
     <div className='su-details'>
        <div className="su-box">
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

export default Detailsu