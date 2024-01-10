import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .then(err => console.log(err));
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button className='btn btn-secondary rounded-lg' onClick={handleLogOut}>Logout</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;