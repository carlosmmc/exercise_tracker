import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';

function EditRow() {
    const [value, valueUpdate] = useState(0)
    const update = (increment) => valueUpdate(Math.min(Math.max(value + increment, 0), 10))

    return (
        <>
            <span class=""> <MdModeEdit /> </span>
            {/* <span class="ghouls"> <RiGhostLine onClick={() => update(-1)} /></span>
            <span>{value}</span>
            <span class="ghouls"><RiGhostFill onClick={() => update(1)} /></span> */}
        </>
    )
}

export default EditRow
