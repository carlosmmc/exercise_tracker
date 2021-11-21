import React from 'react';
import { Link } from 'react-router-dom';
import ManipulateData from '../components/Manipulate';

function ModifyPage({ exercisetoEdit }) {
    return (
        <>
            <ManipulateData startingVals={exercisetoEdit} mode='edit' />
        </>
    );
}

export default ModifyPage;