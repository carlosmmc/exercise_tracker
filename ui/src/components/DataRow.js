import React from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'

function Row({ item, onDelete, onEdit }) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.reps}</td>
            <td>{item.weight}</td>
            <td>{item.unit}</td>
            <td>{item.date}</td>
            <td><MdModeEdit onClick={() => onEdit(item, 'edit')} /></td>
            <td><MdDeleteForever onClick={() => onDelete(item._id)} /></td>
        </tr>
    )
}

export default Row