import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddOrEdit({ mode, seedData = {} }) {
    const [name, setName] = useState(seedData.name)
    const [reps, setReps] = useState(seedData.reps)
    const [weight, setWeight] = useState(seedData.weight)
    const [date, setDate] = useState(seedData.date)
    const [unit, setUnit] = useState(seedData.unit)

    const history = useHistory()

    const submitChanges = async (method, path, successCode) => {
        const entry = { name, reps, weight, 'unit': unit, date }
        const response = await fetch(path, {
            method: method,
            body: JSON.stringify(entry),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.status === successCode) {
            alert(`Successful ${mode} operation completed!`)
        } else {
            alert(`Failed to ${mode} exercise, the status code of the request was ${response.status}.`)
        }

        history.push('/')
    }

    return (
        <form>
            <legend> Excercise </legend>

            <fieldset>

                <label for="name">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />

                <label for="reps"># Reps</label>
                <input type="number" id="reps" value={reps} onChange={e => setReps(e.target.value)} />

                <label for="weight">Weight</label>
                <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value)} />

                <label for="unit">Unit</label>
                <input type="text" id="unit" value={unit} onChange={e => setUnit(e.target.value)} />

                <label for="date">Date</label>
                <input type="text" id="date" value={date} onChange={e => setDate(e.target.value)} />

            </fieldset>

            <button onClick={e => {
                if (mode === 'add') {
                    submitChanges('POST', '/exercises', 201)
                } else if (mode === 'edit') {
                    submitChanges('PUT', `/exercises/${seedData._id}`, 200)
                }
                e.preventDefault()
            }}>Submit</button>

        </form>
    )
}

export default AddOrEdit