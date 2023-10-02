import React from 'react';

const ManageHospitalsModal = ({ selectedHospital }) => {
    const { name, email, number, location, details, image } = selectedHospital;

    return (
        <>
            <input type="checkbox" id="user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="user-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <div className="card card-compact w-full bg-base-100 shadow-xl mt-5 ">
                        <figure><img className='w-full h-[300px]' src={image} alt="HospitalImage" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{details}</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='font-bold'>Contact</td>
                                        <td className='pl-2  font-bold'>: {number}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Email</td>
                                        <td className='pl-2 font-bold'>: {email}</td>
                                    </tr>
                                    <tr>
                                        <td className='font-bold'>Location</td>
                                        <td className='pl-2 font-bold'>: {location}</td>
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

export default ManageHospitalsModal;