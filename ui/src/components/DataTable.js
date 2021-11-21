import React from 'react';
import DataRow from './DataRow';

function DataTable({ items, onDelete, onEdit }) {
    const defaultRow = () => {
        return <tr><td colspan="7">No exercises added</td></tr>
    }

    const displayData = (items) => {
        return items.map((item, k) => <DataRow item={item} key={k} onDelete={onDelete} onEdit={onEdit} />)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {items.length !== 0 ? displayData(items) : defaultRow()}
            </tbody>
        </table>
    )
}

export default DataTable