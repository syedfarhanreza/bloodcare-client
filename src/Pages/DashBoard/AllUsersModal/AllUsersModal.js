import React from 'react';

const AllUsersModal = ({selectedUser}) => {
    const {name,number,nid,dob,gender,blood,address,district,country,email,role} = selectedUser;
    return (
        <>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-4 bg-white rounded-lg shadow-lg">
                    <label htmlFor="user-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out cursor-pointer">✕</label>
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mb-2 text-gray-800">{name}</h1>
                        <p className="text-gray-600 mb-2">User ID: {number}</p>
                        <p className="text-gray-600 mb-2">NID: {nid}</p>
                        <p className="text-gray-600 mb-2">Date of Birth: {dob}</p>
                        <p className="text-gray-600 mb-2">Gender: {gender}</p>
                        <p className="text-gray-600 mb-2">Blood Type: {blood}</p>
                        <p className="text-gray-600 mb-2">Address: {address}</p>
                        <p className="text-gray-600 mb-2">District: {district}</p>
                        <p className="text-gray-600 mb-2">Country: {country}</p>
                        <p className="text-gray-600 mb-2">Email: {email}</p>
                        <p className="text-gray-600">Role: {role}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllUsersModal;