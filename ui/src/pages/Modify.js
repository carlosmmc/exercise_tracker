import React from 'react';
import { Link } from 'react-router-dom';
import ManipulateData from '../components/Manipulate';

function ModifyPage({ exercisetoEdit, mode }) {
    return (
        <>
            <ManipulateData startingVals={exercisetoEdit} mode={mode} />
        </>
    );
}

export default ModifyPage;