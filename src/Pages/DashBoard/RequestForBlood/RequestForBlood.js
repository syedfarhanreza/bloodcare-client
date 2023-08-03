import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from 'react-query';

const RequestForBlood = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/requests?email=${user?.email}`;

    const { data: requests = [] } = useQuery({
        queryKey: ['requests', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl my-5">Blood Requests</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Blood Group</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Hospital</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           requests.map((requests, i) =>   <tr key={requests._id}>
                            <th>{i+1}</th>
                            <td>{requests.requestedDate}</td>
                            <td>{requests.requestedTime}</td>
                            <td>{requests.applicant}</td>
                            <td>{requests.bloodRequest}</td>
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