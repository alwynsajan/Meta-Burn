import React, { useState } from 'react';
import Select from 'react-select';
import './TrackWorkout.css';
function TrackWorkout() {

    const exerciseOptions = [
                            { value: 'running', label: 'Running' },
                            { value: 'cycling', label: 'Cycling' },
                            { value: 'swimming', label: 'Swimming' },
                            { value: 'yoga', label: 'Yoga' },
                            { value: 'weightlifting', label: 'Weightlifting' }
                            ];

    const intensityOptions = [
                            { value: 'low', label: 'Low' },
                            { value: 'medium', label: 'Medium' },
                            { value: 'high', label: 'High' }
                            ];

    const [selectedExercise, setSelectedExercise] = useState(null);
    const [selectedIntensity, setIntensity] = useState(null);
  return (

    <div className="addWorkoutCard card h-100">
        <div className="card-body">
            <h1 className='workoutHeading'>Workout.</h1>
            <h2 className='workoutHeading2'>Select Workout:</h2>
            <div className='selectWorkout'>
                <Select
                    options={exerciseOptions}
                    value={selectedExercise}
                    onChange={setSelectedExercise}
                    placeholder="Select an exercise"
                    isSearchable
                />
            </div>
            <h2 className='workoutHeading2'>Select Intensity:</h2>
            <div className='selectWorkout'>
                <Select
                    options={intensityOptions}
                    value={selectedIntensity}
                    onChange={setIntensity} 
                    placeholder="Select intensity"
                    isSearchable
                />
                </div>
                <h2 className='workoutHeading2'>Duration:</h2>
                
        </div>
    </div>
  )
}

export default TrackWorkout
