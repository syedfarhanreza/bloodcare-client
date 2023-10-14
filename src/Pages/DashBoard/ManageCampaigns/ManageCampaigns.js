import { faCalendar, faClock, faMapMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import separator from '../../../assets/separator/separator.png';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import ManageCampaignModal from '../ManageCampaignModal/ManageCampaignModal';

const ManageCampaigns = () => {
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [deletingCampaign, setDeletingCampaign] = useState(null);

    const closeModal = () => {
        setDeletingCampaign(null);
    }

    const { data: campaigns, isLoading, refetch } = useQuery({
        queryKey: ['campaigns'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/campaigns', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteBlog = campaign => {
        fetch(`http://localhost:5000/campaigns/${campaign._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Campaign: ${campaign.name} deleted successfully`)
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className='text-3xl my-3 text-center font-bold text-red-600'>Manage Blogs</h2>
            <img className='m-auto' src={separator} alt="separator" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {campaigns?.map((campaign) => (
                    <div key={campaign._id} className="bg-white rounded-lg shadow-lg">
                        <img src={campaign.image} alt={campaign.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{campaign.title}</h3>
                            <div className='h-[150px]'>
                                <p className="text-gray-600 line-clamp-6">{campaign.details}</p>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faMapMarker} className="text-gray-600 mr-2 pb-5 text-xl" />
                                <span className="text-gray-600">{campaign.location}</span>
                            </div>
                            <div className='flex justify-between items-center mt-1'>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faCalendar} className="text-gray-600 mr-2" />
                                    <span className="text-gray-600">{campaign.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faClock} className="text-gray-600 mr-2" />
                                    <span className="text-gray-600">{campaign.time}</span>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <label
                                    htmlFor="user-modal"
                                    className="btn btn-outline btn-info btn-xs"
                                    onClick={() => {
                                        setSelectedCampaign(campaign);
                                    }}
                                >Details</label>
                                <label
                                    htmlFor="confirmation-modal"
                                    onClick={() => setDeletingCampaign(campaign)}
                                    className="btn btn-ghost btn-xs hover:btn-error"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {deletingCampaign && (
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingCampaign.title}, it cannot be undone.`}
                    successAction={handleDeleteBlog}
                    successButtonName="Delete"
                    modalData={deletingCampaign}
                    closeModal={closeModal}
                />
            )}
            {selectedCampaign && <ManageCampaignModal
                refetch={refetch}
                selectedBlog={selectedCampaign}
            ></ManageCampaignModal>}
        </div>
    );
};

export default ManageCampaigns;