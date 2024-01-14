import React, { useState } from 'react';
import { useQuery } from 'react-query';
import separator from '../../assets/separator/separator.png';
import defaultImage from '../../assets/propic/propic.png';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Donors = () => {
    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users').then((res) => res.json()),
    });

    const [bloodGroup, setBloodGroup] = useState('');
    const [district, setDistrict] = useState('');
    const [gender, setGender] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const filteredUsers = users
            ?.filter((user) => {
                const matchesBlood = !bloodGroup || user.blood.toLowerCase() === bloodGroup.toLowerCase();
                const matchesDistrict = !district || user.district.toLowerCase() === district.toLowerCase();
                const matchesGender = !gender || user.gender.toLowerCase() === gender.toLowerCase();
                return matchesBlood && matchesDistrict && matchesGender && user.role !== 'admin';
            });
        setSearchResults(filteredUsers || []);
    };
    const handleCall = (phoneNumber) => {
        const telLink = `tel:${phoneNumber}`;
        window.location.href = telLink;
    };


    const handleEmail = (email) => {
        const mailtoLink = `mailto:${email}`;
        window.open(mailtoLink, '_blank');
    };

    const totalDonors = users?.filter((user) => user.role === 'donor' || user.role === 'both').length;
    const filteredDonorCount = searchResults.length;

    return (
        <div className="container mx-auto p-4 mb-5">
            <h2 className="text-3xl text-center font-bold text-red-600">Donors</h2>
            <img className="m-auto" src={separator} alt="separator" />
            <div className="bg-pink-200 w-[90%] mx-auto mb-10 p-8">
                <div className="search-fields flex flex-col md:flex-col lg:flex-row justify-between px-10">
                    <div className="relative flex flex-col mb-2">
                        <label className="font-bold pl-1 mb-1" htmlFor="bloodGroup">
                            Blood Group
                        </label>
                        <select
                            id="bloodGroup"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                            className="rounded-md p-2 border border-white focus:outline-none"
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="relative flex flex-col mb-2">
                        <label className="font-bold pl-1 mb-1" htmlFor="district">
                            District
                        </label>
                        <input
                            type="text"
                            id="district"
                            placeholder="District"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="rounded-md p-2 border border-white focus:outline-none"
                        />
                    </div>
                    <div className="relative flex flex-col mb-2">
                        <label className="font-bold pl-1 mb-1" htmlFor="gender">
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="rounded-md p-2 border border-white focus:outline-none"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="pt-2 md:pt-0">
                        <button className="btn btn-outline bg-red-600 hover:bg-pink-600 text-white shadow-xl border-none mt-6" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-red-600 text-white w-[90%] mx-auto mb-10 p-2">
                <p>
                    {searchResults?.length > 0
                        ? `Total Search Results: ${filteredDonorCount}`
                        : `Total Donors found: ${totalDonors}.`}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 w-[90%] mx-auto">
                {searchResults?.length > 0 ? (
                    searchResults?.map((user) => (
                        <div key={user._id} className="card bg-base-100 w-[420px] shadow-xl hover:shadow-2xl">
                            <div className="grid justify-items-center p-5 md:p-10 mb-3 m-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                <img className="w-1/2 rounded-full border-double border-4 border-white" src={user.image || defaultImage} alt="profilePicture" />
                            </div>
                            <div className="text-justify pb-5">
                                <h2 className="text-2xl font-semibold mb-2 mx-5">{user.name}</h2>
                                <table className="text-gray-600 mx-5">
                                    <tbody>
                                        <tr>
                                            <td className="font-bold">Phone Number</td>
                                            <td className="pl-4 capitalize">: {user.number}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">NID</td>
                                            <td className="pl-4 capitalize">: {user.nid}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Date of Birth</td>
                                            <td className="pl-4 capitalize">: {user.dob}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Gender</td>
                                            <td className="pl-4 capitalize">: {user.gender}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Blood Type</td>
                                            <td className="pl-4 uppercase">: {user.blood}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Address</td>
                                            <td className="pl-4 capitalize">: {user.address}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">District</td>
                                            <td className="pl-4 capitalize">: {user.district}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Country</td>
                                            <td className="pl-4 capitalize">: {user.country}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Email</td>
                                            <td className="pl-4">: {user.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))
                ) : (
                    users
                        ?.filter((user) => user.role === 'donor' || user.role === 'both')
                        .map((user) => (
                            <div key={user._id} className="card bg-base-100 shadow-xl hover:shadow-2xl">
                                <div className="grid justify-items-center p-5 md:p-10 mb-3 m-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                    <img className="w-1/2 rounded-full border-double border-4 border-white" src={user.image || defaultImage} alt="profilePicture" />
                                </div>
                                <div className="text-justify pb-5">
                                    <h2 className="text-2xl font-semibold mb-2 mx-5">{user.name}</h2>
                                    <table className="text-gray-600 mx-5">
                                        <tbody>
                                            <tr>
                                                <td className="font-bold">Phone Number</td>
                                                <td className="pl-4 capitalize">: {user.number}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">NID</td>
                                                <td className="pl-4 capitalize">: {user.nid}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Date of Birth</td>
                                                <td className="pl-4 capitalize">: {user.dob}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Gender</td>
                                                <td className="pl-4 capitalize">: {user.gender}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Blood Type</td>
                                                <td className="pl-4 uppercase">: {user.blood}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Address</td>
                                                <td className="pl-4 capitalize">: {user.address}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">District</td>
                                                <td className="pl-4 capitalize">: {user.district}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Country</td>
                                                <td className="pl-4 capitalize">: {user.country}</td>
                                            </tr>
                                            <tr>
                                                <td className="font-bold">Email</td>
                                                <td className="pl-4">: {user.email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex justify-center items-center mt-4">
                                        <button
                                            className="mr-4 bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                                            onClick={() => handleCall(user.number)}
                                        >
                                            <FontAwesomeIcon icon={faPhone} />
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                                            onClick={() => handleEmail(user.email)}
                                        >
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    );
};

export default Donors;
