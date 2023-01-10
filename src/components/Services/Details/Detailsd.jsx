import React from 'react'
import './Detailsd.css'
function Detailsd(props) {
  return (
    <>
     <div className='sd-details'>
        <div className="sd-box">
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

export default Detailsd