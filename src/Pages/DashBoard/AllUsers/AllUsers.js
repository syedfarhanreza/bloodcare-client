import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AllUsersModal from '../AllUsersModal/AllUsersModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    const [selectedUser, setSelectedUser] = useState(null);

   const handleMakeAdmin = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.modifiedCount > 0) {
            toast.success('Make admin successfully');
            refetch();
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
   
    return (
        <div className="container mx-auto p-4">
            <h3 className="text-3xl my-3 text-center font-bold text-red-600">All Users</h3>
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
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>
                                    <button
                                        className="btn btn-ghost btn-xs"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </th>
                                <th>{i + 1}</th>
                                <td className='text-red-600 font-bold'>{user.name}</td>
                                <td className='text-red-600 font-bold'>{user.number}</td>
                                <td className='capitalize'>{user.gender}</td>
                                <td className='uppercase'>{user.blood}</td>
                                <td className='capitalize'>{user.district}</td>
                                <td>{user.email}</td>
                                <td className='capitalize'>{user.role}</td>
                                <td>
                                    <label
                                        htmlFor="user-modal"
                                        className="btn btn-info btn-xs"
                                        onClick={() => {
                                            setSelectedUser(user);
                                        }}
                                    >Show Details</label>
                                </td>
                                <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
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