import React from 'react';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="container mx-auto p-4">
            <h3 className="text-xl my-3 text-center font-bold text-red-600">Blood Requests</h3>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th >Number</th>
                            <th >NID</th>
                            <th >DOB</th>
                            <th>Gender</th>
                            <th>Blood</th>
                            <th>Address</th>
                            <th>District</th>
                            <th>Country</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td className='text-red-600 font-bold'>{user.name}</td>
                                <td className='text-red-600 font-bold'>{user.number}</td>
                                <td >{user.nid}</td>
                                <td className='text-red-600 font-bold'>{user.dob}</td>
                                <td>{user.gender}</td>
                                <td>{user.blood}</td>
                                <td>{user.address}</td>
                                <td>{user.district}</td>
                                <td>{user.country}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;