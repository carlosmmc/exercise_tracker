import React, { useState } from 'react';

function AddExercise() {
    const [zip, setZip] = useState('')

    return (
        <form>
            <legend> Store Search </legend>

            <fieldset>

                <label for="name">Name</label>
                <input type="text" id="name" value={zip} onChange={e => setZip(e.target.value)} />

                <label for="reps"># Reps</label>
                <input type="number" id="reps" value={zip} onChange={e => setZip(e.target.value)} />

                <label for="weight">Weight</label>
                <input type="number" id="weight" value={zip} onChange={e => setZip(e.target.value)} />

                <label for="unit">Unit</label>
                <select name="unit" id="unit">
                    <option value="kgs">Kilograms</option>
                    <option value="lbs">Pounds</option>
                </select>

                <label for="date">Date</label>
                <input type="text" id="date" value={zip} onChange={e => setZip(e.target.value)} />

            </fieldset>

            <button onClick={e => {
                alert(`Exercise Saved`)
                e.preventDefault()
            }}>Submit</button>

        </form>
    )
}

export default AddExercise