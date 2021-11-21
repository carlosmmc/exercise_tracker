import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DataTable from '../components/DataTable';
import { AiFillPlusCircle } from "react-icons/ai";

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
            const filteredData = exercises.filter(e => e._id !== _id)
            setExercises(filteredData)
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
            <div id="tableHeader">
                <h1 id="homeH1">Exercise Tracker</h1>
                <Link id="createButton" to="/create"><AiFillPlusCircle style={{ color: 'black', height: '20px' }} />Add</Link>
            </div>
            <DataTable items={exercises} onDelete={onDelete} onEdit={onEdit} />
        </>
    );
}

export default HomePage;