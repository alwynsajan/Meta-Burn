import React from 'react'
import './Bio.css';

function Bio() {
  return (
    <div className='bioElement '>
      <h1 className='bioHeading'>Good Morning, Alwyn.</h1>
      <div className="bioData">
        <h1 className='bioAge'>Age : 26</h1>
        <h1 className='bioHeight'>Height : 167</h1>
        <h1 className='bioWeight'>Weight : 65</h1>
        <h1 className='bioBmi'>BMI : 23.3</h1>
        <h1 className='bioBmr'>BMR : 1500</h1>


      </div>
    </div>
  )
}

export default Bio
