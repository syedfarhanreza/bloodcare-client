import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from 'react-query';

const RequestForBlood = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/requests?email=${user?.email}`;

    const { data: requests, isError, isLoading } = useQuery({
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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-3xl my-3 text-center font-bold text-red-600">Blood Requests</h3>
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
                        </tr>
                    </thead>
                    <tbody>
                        { requests &&
                            requests?.map((requests, i) =>   <tr key={requests._id}>
                            <th>{i+1}</th>
                            <td className='text-red-600 font-bold'>{requests.requestedDate}</td>
                            <td className='text-red-600 font-bold'>{requests.requestedTime}</td>
                            <td >{requests.applicant}</td>
                            <td className='text-red-600 font-bold'>{requests.bloodRequest}</td>
                            <td>{requests.email}</td>
                            <td>{requests.phone}</td>
                            <td>{requests.hospital}</td>
                            <td>{requests.message}</td>
                        </tr>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestForBlood;