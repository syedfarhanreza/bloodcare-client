import React from 'react';
import banner from '../../../assets/Banner/Banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[720px] mb-20" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 sm:text-6xl lg:text-8xl   font-bold text-red-600 ">BloodCare</h1>
                    <p className="mb-5 text-xl font-bold text-red-600">A web-based solution for effective Blood Management and Donation Campaigns</p>
                    <button className=" bg-red-600 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full">Join With Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;