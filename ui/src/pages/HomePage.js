import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



const HomePage = ({ setExerciseToEdit, setMode }) => {
    const history = useHistory()
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

    const onEdit = async (exerciseToEdit, mode) => {
        setExerciseToEdit(exerciseToEdit)
        setMode(mode)
        history.push('/modifyExercise')
    }

    useEffect(() => loadData(), [])

    return (
        <>
            {/* <GiRaiseSkeleton size={90} /> */}
            <h1 class="home_h1">Exercise Tracker!</h1>
            <DataTable items={exercises} deleteData={deleteData} onEdit={onEdit} />
            <Link className="App-link" to="/modifyExercise">Add exercise!</Link>
            <button onClick={e => { onEdit({}, 'add') }}>Create exercise</button>
        </>
    );
}

export default HomePage;