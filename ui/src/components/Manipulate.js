import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ManipulateData({ startingVals, mode }) {
    const [name, setName] = useState(startingVals.name)
    const [reps, setReps] = useState(startingVals.reps)
    const [weight, setWeight] = useState(startingVals.weight)
    const [date, setDate] = useState(startingVals.date)
    const [unit, setUnit] = useState(startingVals.unit)
    const history = useHistory()

    const submitEntry = async (method, path, successCode) => {
        const entry = { name, reps, weight, 'unit': unit, date }
        const response = await fetch(path, {
            method: method,
            body: JSON.stringify(entry),
            headers: {
                'Content-Type': 'application/json',
            }
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
                    submitEntry('POST', '/exercises', 201)
                } else if (mode === 'edit') {
                    submitEntry('PUT', `/exercises/${startingVals._id}`, 200)
                }
                e.preventDefault()
            }}>Submit</button>

        </form>
    )
}

export default ManipulateData