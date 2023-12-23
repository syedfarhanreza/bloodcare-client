import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyBloodRequest = () => {
    const { user } = useContext(AuthContext);
    const [deletingRequest, setDeletingRequest] = useState(null);

    const closeModal = () => {
        setDeletingRequest(null);
    }

    const url = `http://localhost:5000/requests?email=${user?.email}`;

    const { data: requests, isError, isLoading ,refetch} = useQuery({
        queryKey: ['requests', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                return data;
            } catch (error) {
                throw new Error('Error fetching data');
            }
        }
    });
    const handleDeleteRequest = request => {
        fetch(`http://localhost:5000/requests/${request._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Request from ${request.applicant} deleted successfully`);
                }
            })
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }
    const sortedRequests = requests ? [...requests].sort((a, b) => {
        const dateComparison = new Date(b.requestedDate) - new Date(a.requestedDate);
        if (dateComparison !== 0) {
            return dateComparison;
        }
        return new Date(b.requestedTime) - new Date(a.requestedTime);
    }) : null;

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-3xl my-3 text-center font-bold text-red-600">My Blood Requests</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-red-600 font-bold'>Date</th>
                            <th className='text-red-600 font-bold'>Time</th>
                            <th>Name</th>
                            <th className='text-red-600 font-bold'>Blood Group</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Hospital</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedRequests &&
                            sortedRequests.map((requests, i) => <tr key={requests._id}>
                                <th>{i + 1}</th>
                                <td className='text-red-600 font-bold'>{requests.requestedDate}</td>
                                <td className='text-red-600 font-bold'>{requests.requestedTime}</td>
                                <td >{requests.applicant}</td>
                                <td className='text-red-600 font-bold'>{requests.bloodRequest}</td>
                                <td>{requests.email}</td>
                                <td>{requests.phone}</td>
                                <td>{requests.hospital}</td>
                                <td>{requests.message}</td>
                                <td>
                                    <label onClick={() => setDeletingRequest(requests)} className="btn btn-outline btn-error btn-xs font-bold" htmlFor="confirmation-modal">
                                        Delete
                                    </label></td>
                            </tr>)
                        }
                    </tbody>
                </table>            </div>
            {deletingRequest && (
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete your request, it cannot be undone.`}
                    successAction={handleDeleteRequest}
                    successButtonName="Delete"
                    modalData={deletingRequest}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default MyBloodRequest;