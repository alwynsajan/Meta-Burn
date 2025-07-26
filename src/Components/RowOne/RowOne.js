import React from 'react'
import './RowOne.css';
import TrackWorkout from './TrackWorkout/TrackWorkout';
import Progress from './Progress/Progress';
import Steps from './Steps/Steps';

function RowOne() {
  return (
    <div className='workoutElement'>
        <TrackWorkout/>
        <Progress/>
        <Steps/>
    </div>
  )
}

export default RowOne
