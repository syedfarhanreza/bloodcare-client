import React, { useState } from 'react';
import { useQuery } from 'react-query';
import separator from '../../assets/separator/separator.png';
import defaultImage from '../../assets/propic/propic.png';

const Donors = () => {

    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())
    });

    const donorUsers = users?.filter(user => user.role === 'donor' || user.role === 'both');

    return (
        <div className="container mx-auto p-4 mb-5">
            <h2 className='text-3xl  text-center font-bold text-red-600'>Donors</h2>
            <img className='m-auto' src={separator} alt="separator" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 w-[90%] m-auto">
                {donorUsers.map((user) => (
                    <div key={user._id} className="card w-[440px] bg-base-100 shadow-xl hover:shadow-2xl">
                        <div className='grid justify-items-center p-10 mb-3 m-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <img className='w-1/2 rounded-full border-double border-4 border-white' src={user.image || defaultImage} alt="profilePicture" />
                        </div>
                        <div className="text-justify pb-5">
                            <h2 className="text-2xl font-semibold mb-2 mx-5">{user.name}</h2>
                            <table className="text-gray-600 mx-5">
                                <tbody>
                                    <tr>
                                        <td className='font-bold'>Phone Number</td>
                                        <td className='pl-4 capitalize'>: {user.number}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>NID</td>
                                        <td className='pl-4 capitalize'>: {user.nid}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Date of Birth</td>
                                        <td className='pl-4 capitalize'>: {user.dob}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Gender</td>
                                        <td className='pl-4 capitalize'>: {user.gender}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Blood Type</td>
                                        <td className='pl-4 uppercase'>: {user.blood}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Address</td>
                                        <td className='pl-4 capitalize'>: {user.address}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>District</td>
                                        <td className='pl-4 capitalize'>: {user.district}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Country</td>
                                        <td className='pl-4 capitalize'>: {user.country}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Email</td>
                                        <td className='pl-4'>: {user.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Donors;