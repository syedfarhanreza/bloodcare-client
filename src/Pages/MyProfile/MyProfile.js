import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/users/${user?.uid}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (user?.uid) {
            fetchUserData();
        }
    }, [user?.uid]);

    return (
        <div className='w-3/5'>
            {userData ? (
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={userData.image} alt="ProfilePicture" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{userData.name}</h2>
                        <div>
                            <table className="text-gray-600 mx-5">
                                <tbody>
                                    <tr>
                                        <td className='font-bold'>Phone Number</td>
                                        <td className='pl-4 capitalize'>: {userData.number}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>NID</td>
                                        <td className='pl-4 capitalize'>: {userData.nid}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Date of Birth</td>
                                        <td className='pl-4 capitalize'>: {userData.dob}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Gender</td>
                                        <td className='pl-4 capitalize'>: {userData.gender}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Blood Type</td>
                                        <td className='pl-4 uppercase'>: {userData.blood}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Address</td>
                                        <td className='pl-4 capitalize'>: {userData.address}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>District</td>
                                        <td className='pl-4 capitalize'>: {userData.district}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Country</td>
                                        <td className='pl-4 capitalize'>: {userData.country}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Email</td>
                                        <td className='pl-4'>: {userData.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default MyProfile;
