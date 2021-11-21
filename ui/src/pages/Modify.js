import React from 'react';
import ManipulateData from '../components/Manipulate';

function ModifyPage({ exercisetoEdit }) {
    return (
        <>
            <ManipulateData startingVals={exercisetoEdit} mode='edit' />
        </>
    );
}

export default ModifyPage;