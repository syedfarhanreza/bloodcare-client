import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const [editing, setEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (user?.uid) {
                    const response = await fetch(`http://localhost:5000/users/profile/${user.uid}`);
                    if (response.ok) {
                        const data = await response.json();
                        const { _id, ...rest} = data;
                        setUserData(data);
                        // Set default form values when user data is loaded
                        setUpdatedData(rest);
                    } else {
                        console.error('Failed to fetch user data');
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [user?.uid]);

    const handleUpdateProfile = async () => {
        try {
            if (typeof user?.uid === 'string' && user.uid.trim() !== '') {
                const response = await fetch(`http://localhost:5000/users/profile/${userData._id}`, {
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
                    setUserData((prev) => ({
                        ...updatedData,
                        _id: prev._id
                    }));
                    setEditing(false);
                    toast.success('Profile updated successfully')
                } else {
                    console.error('Failed to update user data:', responseData.message || 'Unknown error');
                }
            } else {
                console.error('Invalid user ID format');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleDateChange = (date, name) => {
        handleInputChange({ target: { name, value: date } });
    };

    return (
        <>
            {userData ? (
                <div className="card card-compact w-2/5 mx-auto my-10 bg-base-100 shadow-xl">
                    <div className='grid justify-items-center p-10 mb-3 m-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        <img className='w-1/2 rounded-full border-double border-4 border-white' src={userData.image} alt="profilePicture" />
                    </div>
                    <div className="card-body">
                        {editing ? (
                            <form>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Name
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="name"
                                            value={updatedData.name || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Email
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="email"
                                            disabled
                                            value={updatedData.email || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="number"
                                            value={updatedData.number || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            NID
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="nid"
                                            value={updatedData.nid || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-3 gap-2'>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Date of Birth
                                        </label>
                                        <DatePicker
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            selected={updatedData.dob ? new Date(updatedData.dob) : null}
                                            onChange={(date) => handleDateChange(date, 'dob')}
                                            name="dob"
                                            value={updatedData.dob}
                                            dateFormat="yyyy/MM/dd"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Gender
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="gender"
                                            value={updatedData.gender || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Blood Type
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="blood"
                                            value={updatedData.blood || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Address
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="address"
                                            value={updatedData.address || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            District
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="district"
                                            value={updatedData.district || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5'>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Country
                                        </label>
                                        <input
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            type="text"
                                            name="country"
                                            value={updatedData.country || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Date of Donation
                                        </label>
                                        <DatePicker
                                            className='input input-bordered input-primary w-full max-w-xs'
                                            selected={updatedData.dateOfDonation ? new Date(updatedData.dateOfDonation) : null}
                                            onChange={(date) => handleDateChange(date, 'dateOfDonation')}
                                            name="dateOfDonation"
                                            value={updatedData.dateOfDonation}
                                            dateFormat="yyyy/MM/dd" // Add the time format you want
                                        />  
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleUpdateProfile}
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => setEditing(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className='text-justify'>
                                <h2 className="card-title">{userData.name}</h2>
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
                        )}
                        <div className="card-actions justify-end">
                            {!editing && (
                                <button className="btn btn-primary" onClick={() => setEditing(true)}>
                                    Update Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </>
    );
};

export default Profile;
