import React from 'react';
import DataRow from './DataRow';

function DataTable({ items, deleteData }) {
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
                {items.map((item, i) => <DataRow item={item} key={i} deleteData={deleteData} />)}
            </tbody>
        </table>
    )
}

export default DataTable