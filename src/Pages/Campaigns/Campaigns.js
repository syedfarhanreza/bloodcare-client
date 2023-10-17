import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import separator from '../../assets/separator/separator.png';
import { useQuery } from 'react-query';

const Campaigns = () => {

    const { data: campaigns } = useQuery({
        queryKey: ['campaigns'],
        queryFn: () => fetch('http://localhost:5000/campaigns')
            .then(res => res.json())
    });
    return (
        <div className="container mx-auto p-4">
            <h2 className='text-3xl mt-3 text-center font-bold text-red-600'>Campaigns</h2>
            <img className='m-auto' src={separator} alt="separator" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {campaigns?.map((campaign) => (
                    <div key={campaign._id} className="bg-white rounded-lg shadow-lg">
                        <img src={campaign.image} alt={campaign.name} className="w-full h-[300px] object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{campaign.title}</h3>
                            <div className='h-[300px] mb-3'>
                                <p className="text-gray-600">{campaign.details}</p>
                            </div>
                            <div className="flex items-center my-2">
                                <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2 text-xl" />
                                <a className='text-blue-600 hover:text-blue-400' href={`tel:${campaign.number}`}>{campaign.number}</a>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faMapMarker} className="text-gray-600 mr-2 text-xl" />
                                <a  className='text-blue-600 hover:text-blue-400' href={`https://maps.google.com/?q=${campaign.location}`} target="_blank" rel="noopener noreferrer">
                                    {campaign.location}
                                </a>
                            </div>
                            <div className='flex justify-between items-center mt-2'>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faCalendar} className="text-gray-600 mr-2" />
                                    <span className="text-gray-600">{campaign.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faClock} className="text-gray-600 mr-2" />
                                    <span className="text-gray-600">{campaign.time}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* {selectedCampaign && <ManageCampaignModal
                refetch={refetch}
                selectedCampaign={selectedCampaign}
            ></ManageCampaignModal>} */}
        </div>
    );
};

export default Campaigns;