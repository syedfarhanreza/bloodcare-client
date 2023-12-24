import React from 'react';
import { useQuery } from 'react-query';


const RequestForBlood = () => {

    const { data: donorRequests = [] } = useQuery({
        queryKey: ['donorRequests'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/donorRequests');
            const data = await res.json();
            return data;
        }
    });


    return (
        <div className="container mx-auto p-4">
            <h3 className="text-3xl my-3 text-center font-bold text-red-600">Requests for Blood</h3>
            <div className="overflow-x-auto">
                
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
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
                                donorRequests.map((request, i) => <tr key={request._id}>
                                    <th>{i + 1}</th>
                                    <td className='text-red-600 font-bold'>
                                        <p>{request.requestedDate}</p> <br />
                                        <span className='text-md'>{request.requestedTime}</span>
                                    </td>
                                    <td >{request.applicant}</td>
                                    <td className='text-red-600 font-bold'>{request.bloodRequest}</td>
                                    <td>
                                        <p>{request.email}</p> <br />
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
                                </tr>)
                            }
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default RequestForBlood;