import React from 'react'
import Button from '../Intro/Button'
import Card from './Card/Card'
import './Stats.css'
function Stats() {
  return (
   <div className="stat-wrapper">
    <div className="layer">
        <div className="s-left">

<div className="cards">

<div style={{position:'relative',top: '30px' ,left:'45px'}}className="c-1">
  <Card num ="80K+" detail = "Happy Learners"/>

</div>


<div style={{position:'relative',top: '30px', left: '75px'}}className="c-2">
  <Card num ="200+"  detail = "Speakers around the globe"/>
</div>


<div className="highlight">
<div style={{position:'relative',top: '30px', right: '190px'}}className="c-3">
  <Card num ="50K+"  detail = "Mobile Downloads"/>
</div>
<div style={{position:'relative',top: '30px', right: '160px'}}className="c-4">
  <Card num ="53K+"  detail = "Sessions per month"/>
</div>
</div>
</div>


        </div>
        <div className="s-right">
          <div className="box">
            <span>Book a trial</span>
            <span>Start your English speaking journey today!</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis<br/> venenatis.</span>
          
          </div>
         
        <button className='s-b1'>Book a trial</button>
       

        
        </div>
    </div>
   </div>
  )
}

export default Stats