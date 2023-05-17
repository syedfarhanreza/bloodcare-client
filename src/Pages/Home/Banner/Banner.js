import React from 'react';
import banner from '../../../assets/Banner/Banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen mb-10" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-8xl font-bold text-red-600">BloodCare</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;