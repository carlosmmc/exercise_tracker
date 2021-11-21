import React from 'react';
import AddOrEdit from '../components/AddOrEdit';

function ModifyPage({ toEdit }) {
    return (
        <>
            <AddOrEdit seedData={toEdit} mode='edit' />
        </>
    );
}

export default ModifyPage;