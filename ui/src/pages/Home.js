import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DataTable from '../components/DataTable';

const HomePage = ({ setToEdit }) => {
    const [exercises, setExercises] = useState([])
    const history = useHistory()

    const onLoad = async () => {
        const response = await fetch('/exercises')
        const data = await response.json()
        setExercises(data)
    }

    const onDelete = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' })

        if (response.status === 204) {
            await onLoad()
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code of ${response.status}.`)
        }
    }

    const onEdit = async (exercise) => {
        setToEdit(exercise)
        history.push('/edit')
    }

    useEffect(() => onLoad(), [])

    return (
        <>
            <h1 class="home_h1">Exercise Tracker!</h1>
            <DataTable items={exercises} onDelete={onDelete} onEdit={onEdit} />
            <Link className="App-link" to="/create">Add exercise!</Link>
        </>
    );
}

export default HomePage;