import React from 'react';
import defaultImage from '../../../assets/propic/propic.png'
const AllUsersModal = ({ selectedUser }) => {
    const { name, number, nid, dob, gender, blood, address, district, country, email, role, image } = selectedUser;

    const imageUrl = image || defaultImage;

    return (
        <>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="user-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <div className='grid justify-items-center p-10 mb-3 m-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <img className='w-1/2 rounded-full border-double border-4 border-white' src={imageUrl} alt="profilePicture" />
                    </div>
                    <div>
                        <div className="text-justify">
                            <h1 className="text-2xl font-semibold mb-2 mx-5">{name}</h1>
                            <table className="text-gray-600 mx-5">
                                <tbody>
                                    <tr>
                                        <td className='font-bold'>Phone Number</td>
                                        <td className='pl-4 capitalize'>: {number}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>NID</td>
                                        <td className='pl-4 capitalize'>: {nid}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Date of Birth</td>
                                        <td className='pl-4 capitalize'>: {dob}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Gender</td>
                                        <td className='pl-4 capitalize'>: {gender}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Blood Type</td>
                                        <td className='pl-4 uppercase'>: {blood}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Address</td>
                                        <td className='pl-4 capitalize'>: {address}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>District</td>
                                        <td className='pl-4 capitalize'>: {district}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Country</td>
                                        <td className='pl-4 capitalize'>: {country}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Email</td>
                                        <td className='pl-4'>: {email}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Role</td>
                                        <td className='pl-4 capitalize'>: {role}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllUsersModal;