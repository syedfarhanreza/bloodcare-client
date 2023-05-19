import React from 'react';

const DonationCampaignInfo = ({campaign}) => {

    const {name,description, img, location, time} = campaign;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <div>
                        <h4>{location}</h4>
                    </div>
                    <div>
                        <h4>{time}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaignInfo;