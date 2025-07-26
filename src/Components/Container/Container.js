import React from 'react'
import RowOne from '../RowOne/RowOne'
import './Container.css';
import Bio from '../Bio/Bio'

function Container() {
  return (
    <div className='container elementContainer'>
        <Bio/>
        <RowOne/>
      
    </div>
  )
}

export default Container
