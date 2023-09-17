import React from 'react';

const DonationProcessCard = ({process}) => {

    const {name,description, img} = process;
    
    return (
        <div className="card card-compact  bg-base-100 shadow-xl hover:shadow-2xl">
            <figure><img className='w-auto' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DonationProcessCard;