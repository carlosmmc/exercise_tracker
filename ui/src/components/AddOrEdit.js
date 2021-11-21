import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GiWeightLiftingUp } from "react-icons/gi";

function AddOrEdit({ mode, seedData = {} }) {
    const [name, setName] = useState(seedData.name)
    const [reps, setReps] = useState(seedData.reps)
    const [weight, setWeight] = useState(seedData.weight)
    const [date, setDate] = useState(seedData.date)
    const [unit, setUnit] = useState(mode === 'add' ? 'lbs' : seedData.unit)

    const history = useHistory()

    const submitChanges = async (method, path, successCode) => {
        const entry = { name, reps, weight, unit, date }
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

            <h2 class="formHeader"> {mode === 'add' ? 'Add Exercise' : 'Edit Exercise'} </h2>
            <ul class="form">

                <li>
                    <label for="name">Name</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </li>

                <li>
                    <label for="reps">Reps</label>
                    <input type="number" id="reps" value={reps} onChange={e => setReps(e.target.value)} />
                </li>

                <li>
                    <label for="weight">Weight</label>
                    <input type="number" id="weight" value={weight} onChange={e => setWeight(e.target.value)} />
                </li>

                <li>
                    <label for="unit">Unit</label>
                    <select name="unit" id="unit" defaultValue={unit} onChange={e => setUnit(e.target.value)}>
                        <option value="lbs">Pounds</option>
                        <option value="kgs">Kilograms</option>
                    </select>
                </li>

                <li>
                    <label for="date">Date</label>
                    <input type="text" id="date" value={date} onChange={e => setDate(e.target.value)} />
                </li>

                <button onClick={e => {
                    if (mode === 'add') {
                        submitChanges('POST', '/exercises', 201)
                    } else if (mode === 'edit') {
                        submitChanges('PUT', `/exercises/${seedData._id}`, 200)
                    }
                    e.preventDefault()
                }}>Submit</button>
            </ul>

        </form>
    )
}

export default AddOrEdit