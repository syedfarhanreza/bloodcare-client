import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({}); 

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`http://localhost:5000/users/profile/${user.uid}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    setProfileData(userData);
                    console.log('User Data:', userData);
                } else {
                    console.error('Failed to fetch profile data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching profile data', error);
            }
        };

        fetchUserProfile();
    }, [user]);

    const handleUpdateClick = () => {
        setIsEditing(true);
        setUpdatedData(profileData); // Initialize with the current profile data
    };

    const handleCancelUpdate = () => {
        setIsEditing(false);
    };

    const handleUpdateData = async () => {
        try {
            const formattedUserId = user.uid; // Replace with actual logic to get the user ID

            console.log('Formatted User ID:', formattedUserId);
            console.log('Updated Data:', updatedData);

            const response = await fetch(`http://localhost:5000/users/profile/${formattedUserId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                const updatedUserData = await response.json();
                setProfileData(updatedUserData);
                setIsEditing(false);
            } else {
                const errorData = await response.json();
                console.error('Failed to update profile data:', response.status, errorData.message);
            }
        } catch (error) {
            console.error('Error updating profile data', error);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <>
            {profileData ? (
                <div className="card card-compact w-2/5 mx-auto my-10 bg-base-100 shadow-xl">
                    <div className='grid justify-items-center p-10 mb-3 m-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        <img className='w-1/2 rounded-full border-double border-4 border-white' src={profileData.image} alt="profilePicture" />
                    </div>
                    <div className='card-body'>
                        <div className='text-justify'>
                            <h2 className="card-title">{profileData.name}</h2>
                            {isEditing ? (
                                <>
                                    {/* Form for updating data */}
                                    <label className="block font-bold mb-1">Phone Number:</label>
                                    <input
                                        type="text"
                                        name="number"
                                        value={updatedData.number || ''}
                                        onChange={handleInputChange}
                                        className="mb-4 p-2 border rounded"
                                    />

                                    {/* Add other form fields for other data */}
                                </>
                            ) : (
                                <table className="text-gray-600 mx-5">
                                    <tbody>
                                        <tr>
                                            <td className='font-bold'>Phone Number</td>
                                            <td className='pl-4 capitalize'>: {profileData.number}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold'>NID</td>
                                            <td className='pl-4 capitalize'>: {profileData.nid}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold'>Date of Birth</td>
                                            <td className='pl-4 capitalize'>: {profileData.dob}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold'>Gender</td>
                                            <td className='pl-4 capitalize'>: {profileData.gender}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold'>Blood Type</td>
                                            <td className='pl-4 uppercase'>: {profileData.blood}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold'>Address</td>
                                            <td className='pl-4 capitalize'>: {profileData.address}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold'>District</td>
                                            <td className='pl-4 capitalize'>: {profileData.district}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold'>Country</td>
                                            <td className='pl-4 capitalize'>: {profileData.country}</td>
                                        </tr>
                                        <tr>
                                            <td className='font-bold'>Email</td>
                                            <td className='pl-4'>: {profileData.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                            {/* Buttons for update, cancel, and save changes */}
                            {isEditing ? (
                                <>
                                    <button className="btn btn-primary mr-2" onClick={handleUpdateData}>
                                        Save Changes
                                    </button>
                                    <button className="btn btn-secondary" onClick={handleCancelUpdate}>
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button className="btn btn-primary" onClick={handleUpdateClick}>
                                    Update Profile
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading profile data...</p>
            )}
            {/* try {
            // Check if 'uid' is a valid string
            console.log('Updated Data:', updatedData);
            if (typeof user?.uid === 'string' && user.uid.trim() !== '') {
                const response = await fetch(`http://localhost:5000/users/profile/${user?.uid}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(updatedData),
                });

                const responseData = await response.json();
                console.log('Server Response:', response);
                console.log('Response Data:', responseData);

                if (response.ok) {
                    setUserData(updatedData);
                    setEditing(false);
                } else {
                    console.error('Failed to update user data');
                }
            } else {
                console.error('Invalid user ID format');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        } */}
        </>
    );
};

export default MyProfile;
