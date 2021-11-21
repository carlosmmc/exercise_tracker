import React from 'react';
import { Link } from 'react-router-dom';
import ManipulateData from '../components/Manipulate';

function CreatePage() {
    return (
        <>
            <ManipulateData mode='add' />
        </>
    );
}

export default CreatePage;