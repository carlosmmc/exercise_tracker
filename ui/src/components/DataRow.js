import React from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'

function Row({ item, deleteData }) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.reps}</td>
            <td>{item.weight}</td>
            <td>{item.unit}</td>
            <td>{item.date}</td>
            <td><MdModeEdit /></td>
            <td><MdDeleteForever onClick={() => deleteData(item._id)} /></td>
        </tr>
    )
}

export default Row