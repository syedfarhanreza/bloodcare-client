import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AllUsersModal from '../AllUsersModal/AllUsersModal';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    const [selectedUser, setSelectedUser] = useState(null);
    return (
        <div className="container mx-auto p-4">
            <h3 className="text-xl my-3 text-center font-bold text-red-600">All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th >Number</th>
                            <th>Gender</th>
                            <th>Blood</th>
                            <th>District</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th></th>
                                <th>{i + 1}</th>
                                <td className='text-red-600 font-bold'>{user.name}</td>
                                <td className='text-red-600 font-bold'>{user.number}</td>
                                <td className='capitalize'>{user.gender}</td>
                                <td className='uppercase'>{user.blood}</td>
                                <td>{user.district}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <label
                                        htmlFor="user-modal"
                                        className="btn btn-ghost btn-xs"
                                        onClick={() => {
                                            setSelectedUser(user);
                                        }}
                                    >Show Details</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                {
                    selectedUser &&
                    <AllUsersModal
                    selectedUser={selectedUser}
                ></AllUsersModal>}
            </div>
        </div>
    );
};

export default AllUsers;