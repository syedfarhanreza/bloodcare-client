import React, { useContext } from 'react';
import joinUS from '../../../assets/Banner/joinUS.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BecomeDonor = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="hero h-min-screen mb-20" style={{ backgroundImage: `url(${joinUS})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content grid grid-rows-1">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">JOIN WITH US AND SAVE LIFE</h1>
                </div>
                <div>
                    { user?.uid?
                        <Link to='/register' hidden className="btn btn-primary">Become Donor</Link>
                        :
                        <Link to='/register' className="btn btn-primary">Become Donor</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default BecomeDonor;