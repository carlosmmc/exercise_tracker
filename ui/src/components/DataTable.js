import React from 'react';
import DataRow from './DataRow';

function DataTable({ items, onDelete, onEdit }) {
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
                {items.map((item, k) => <DataRow item={item} key={k} onDelete={onDelete} onEdit={onEdit} />)}
            </tbody>
        </table>
    )
}

export default DataTable