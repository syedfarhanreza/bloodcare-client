import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AllUsersModal from '../AllUsersModal/AllUsersModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

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
    const [deletingUser, setDeletingUser] = useState(null);
    const [makeAdmin, setMakeAdmin] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
        setMakeAdmin(null);
    }

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

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User: ${user.name} deleted successfully`)
                }
            })
    }

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
                                    <label
                                        htmlFor="confirmation-modal"
                                        onClick={() => setDeletingUser(user)}
                                        className="btn btn-ghost btn-xs"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </label>
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
                                <td>
                                    {
                                        user?.role !== 'admin' && <label htmlFor="confirmation-modal" onClick={() => setMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</label>
                                        
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                {
                    deletingUser && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingUser.name}. It cannot be undone.`}
                        successAction={handleDeleteUser}
                        successButtonName="Delete"
                        modalData={deletingUser}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
                {
                    selectedUser &&
                    <AllUsersModal
                        selectedUser={selectedUser}
                    ></AllUsersModal>
                }
                {
                    makeAdmin && <ConfirmationModal
                        title={`Are you sure you want to Admin?`}
                        message={`If you Admin.It cannot be undone.`}
                        successAction={handleMakeAdmin}
                        successButtonName="Make Admin"
                        modalData={makeAdmin}
                        closeModal={closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default AllUsers;