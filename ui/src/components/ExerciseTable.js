import React from 'react';
import ExerciseRow from './ExerciseRow';

function ExerciseTable({ items }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th># Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <ExerciseRow item={item} key={i} />)}
            </tbody>
        </table>
    )
}

export default ExerciseTable