import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [exercises, setExercises] = useState([])

    const loadData = async () => {
        const response = await fetch('/exercises')
        const data = await response.json()
        setExercises(data)
    }

    const deleteData = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' })

        if (response.status === 204) {
            await loadData()
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code of ${response.status}.`)
        }
    }

    useEffect(() => loadData(), [])

    return (
        <>
            {/* <GiRaiseSkeleton size={90} /> */}
            <h1 class="home_h1">Exercise Tracker!</h1>
            <DataTable items={exercises} deleteData={deleteData} />
            <Link className="App-link" to="/createExercise">Add exercise!</Link>
        </>
    );
}

export default HomePage;