import React from 'react'
import './Card.css'
function Card(props) {
  return (<>
    <div className="card">
       
<span  data-text="+" >{props.num}</span>
<span>{props.detail}</span>


    </div>
  
    </>
  )
}

export default Card