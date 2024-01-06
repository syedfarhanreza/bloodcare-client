import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider';


const RequestForBlood = () => {

    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (user?.uid) {
                    const response = await fetch(`http://localhost:5000/users/profile/${user.uid}`);
                    if (response.ok) {
                        const data = await response.json();
                        setUserData(data);
                    } else {
                        console.error('Failed to fetch user data');
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [user?.uid]);


    const { data: donorRequests = [] } = useQuery({
        queryKey: ['donorRequests'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/donorRequests');
            const data = await res.json();
            return data;
        }
    });

    const sortedDonorRequests = donorRequests?.sort((a, b) => {
        const timeA = new Date(`${a.requestedDate} ${a.requestedTime}`);
        const timeB = new Date(`${b.requestedDate} ${b.requestedTime}`);
        return timeB - timeA;
    });
   

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-3xl my-3 text-center font-bold text-red-600">Requests for Blood</h3>
            <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-red-600 font-bold'>Date & Time</th>
                                <th>Name</th>
                                <th className='text-red-600 font-bold'>Blood Group</th>
                                <th>Contact</th>
                                <th>Hospital</th>
                                <th>Message</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedDonorRequests?.map((request) => {
                                    if (request?.bloodRequest === userData?.blood && userData?.email !== request?.email) {
                                        return (
                                            <tr key={request._id}>
                                    <td className='text-red-600 font-bold'>
                                        <p>{request.requestedDate}</p>
                                        <span className='text-md'>{request.requestedTime}</span>
                                    </td>
                                    <td >{request.applicant}</td>
                                    <td className='text-red-600 font-bold capitalize'>{request.bloodRequest}</td>
                                    <td>
                                        <p>{request.email}</p>
                                        <p>{request.phone}</p>
                                    </td>
                                    <td>{request.hospital}</td>
                                    <td>{request.message}</td>
                                    <td>
                                        <label className="btn btn-outline btn-success btn-xs font-bold mr-1" htmlFor="confirmation-modal">
                                            Accept
                                        </label>
                                        <label className="btn btn-outline btn-error btn-xs font-bold" htmlFor="confirmation-modal">
                                            Decline
                                        </label>
                                    </td>
                                </tr>
                                        );
                                    } else {
                                        return null;
                                    }
                                })
                            
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default RequestForBlood;