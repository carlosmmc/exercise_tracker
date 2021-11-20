import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddExercise() {
    const [name, setName] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [date, setDate] = useState('')
    const history = useHistory()

    const submitEntry = async () => {
        const unit = document.getElementById("unit").value;
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
                <select name="unit" id="unit">
                    <option value="kgs">Kilograms</option>
                    <option value="lbs">Pounds</option>
                </select>

                <label for="date">Date</label>
                <input type="text" id="date" value={date} onChange={e => setDate(e.target.value)} />

            </fieldset>

            <button onClick={e => {
                submitEntry()
                e.preventDefault()
            }}>Submit</button>

        </form>
    )
}

export default AddExercise