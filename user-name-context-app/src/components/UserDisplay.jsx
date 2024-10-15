import React from 'react';
import { useUser } from '../contexts/userContext';

const UserDisplay = () => {

    const { userName } = useUser();

    return (
        <div className='user-display'>
            <p>Nombre del Usuario: {userName}</p>
        </div>
    );
};

export default UserDisplay;
