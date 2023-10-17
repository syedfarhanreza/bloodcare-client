import { faCalendar, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DonationCampaignInfo = ({ campaign }) => {

    const { title, details, image, location, date, time } = campaign;
    return (
        <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl">
            <figure><img className='h-[300px] w-full' src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='mb-2 text-gray-600 line-clamp-3'>{details}</p>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarker} className="text-gray-600 mr-2 text-xl" />
                    <span className="text-gray-600">{location}</span>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faCalendar} className="text-gray-600 mr-2" />
                        <span className="text-gray-600">{date}</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="text-gray-600 mr-2" />
                        <span className="text-gray-600">{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaignInfo;