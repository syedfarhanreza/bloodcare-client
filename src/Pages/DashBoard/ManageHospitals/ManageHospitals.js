import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageHospitals = () => {
    const [deletingHospital, setDeletingHospital] = useState(null);
    const { data: hospitals , isLoading} = useQuery({
        queryKey: ['hospitals'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/hospitals', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="container mx-auto p-4">
            <h2 className='text-3xl my-3 text-center font-bold text-red-600'>Manage Hospitals</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Hospital Name</th>
                            <th>Location</th>
                            <th>Contact</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hospitals?.map((hospital, i) => <tr key={hospital._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={hospital.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{hospital.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{hospital.location}</td>
                                <td>
                                    <div className="font-bold">{hospital.number}</div>
                                    <div className="text-sm font-bold">{hospital.email}</div>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                                <th>
                                <label onClick={() => setDeletingHospital(hospital) } htmlFor="confirmation-modal"  className="btn btn-ghost btn-xs">
                                     <FontAwesomeIcon icon={faTrash} />
                                </label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingHospital && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`It you delete ${deletingHospital.name}. It cannot be undone`}
                >  
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageHospitals;