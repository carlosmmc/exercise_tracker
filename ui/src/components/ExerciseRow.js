import React from 'react';
import EditRow from './edit';
import DeleteRow from './delete';

function ExerciseRow({ item: exercise }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><EditRow /></td>
            <td><DeleteRow /></td>
        </tr>
    )
}

export default ExerciseRow