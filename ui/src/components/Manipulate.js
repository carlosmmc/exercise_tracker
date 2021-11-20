import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ManipulateData({ startingVals = {}, mode = 'add' }) {
    const [name, setName] = useState(startingVals.name)
    const [reps, setReps] = useState(startingVals.reps)
    const [weight, setWeight] = useState(startingVals.weight)
    const [date, setDate] = useState(startingVals.date)
    const [unit, setUnit] = useState(startingVals.unit)

    const history = useHistory()

    const submitEntry = async () => {
        const entry = { name, reps, weight, 'unit': unit, date }
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(entry),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (response.status === 201) {
            alert('Successfully added new exercise!')
        } else {
            alert(`Failed to add exercise, the status code of the request was ${response.status}.`)
        }
        history.push('/')
    }

    return (
        <form>
            <legend> Store Search </legend>

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
                    submitEntry()
                    e.preventDefault()
                } else {
                    alert('yeet BOIS in this boiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
                    e.preventDefault()
                }
            }}>Submit</button>

        </form>
    )
}

export default ManipulateData