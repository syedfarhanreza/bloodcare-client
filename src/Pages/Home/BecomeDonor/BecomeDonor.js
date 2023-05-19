import React from 'react';
import joinUS from '../../../assets/Banner/joinUS.jpg'

const BecomeDonor = () => {
    return (
        <div className="hero h-min-screen mb-20" style={{ backgroundImage: `url(${joinUS})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">JOIN WITH US AND SAVE LIFE</h1>
                    <button className="btn btn-primary">Become Donor</button>
                </div>
            </div>
        </div>
    );
};

export default BecomeDonor;