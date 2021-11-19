import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const [exercises, setExercises] = useState([])

    const loadExercises = async () => {
        const response = await fetch('/exercises')
        const data = await response.json()
        setExercises(data)
    }

    useEffect(() => loadExercises(), [])

    return (
        <>
            {/* <GiRaiseSkeleton size={90} /> */}
            <h1 class="home_h1">Exercise Tracker!</h1>
            <ExerciseTable items={exercises} />
            <Link className="App-link" to="/createExercise">Add exercise!</Link>
        </>
    );
}

export default HomePage;