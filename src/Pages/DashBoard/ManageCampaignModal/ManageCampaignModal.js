import { faCalendar, faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageCampaignModal = ({ selectedCampaign }) => {

    const { title, details, image, location, number, date, time } = selectedCampaign;

    return (
        <>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-5xl">
                    <label htmlFor="user-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-5">
                        <figure><img className='w-full h-[400px]' src={image} alt="HospitalImage" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                        <div className='mx-5'>
                        <div className="flex items-center my-2">
                            <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2 text-xl" />
                            <span className='text-grey-600'>{number}</span>
                        </div>
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
                        <div className="my-4 flex justify-between items-center px-5">
                            <label
                                htmlFor="user-modal"
                                className="btn btn-outline btn-primary btn-sm font-bold"

                            >Edit</label>
                            <label
                                className="btn btn-outline btn-error btn-sm"
                            >
                                Delete
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageCampaignModal;