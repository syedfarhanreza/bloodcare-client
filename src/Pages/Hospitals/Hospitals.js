import React from 'react';
import { useQuery } from 'react-query';
import separator from '../../assets/separator/separator.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const Hospitals = () => {

    const { data: hospitals } = useQuery({
        queryKey: ['hospitals'],
        queryFn: () => fetch('http://localhost:5000/hospitals')
            .then(res => res.json())
    });

    return (
        <div className="container mx-auto p-4">
            <h2 className='text-3xl mt-3 text-center font-bold text-red-600'>Hospitals</h2>
            <img className='m-auto' src={separator} alt="separator" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {hospitals?.map((hospital) => (
                    <div key={hospital._id} className="bg-white rounded-lg shadow-lg">
                        <img src={hospital.image} alt={hospital.name} className="w-full h-[300px] object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{hospital.name}</h3>
                            <div className='lg:h-[200px] md:h-auto sm:h-auto'>
                                <p className="text-gray-600">{hospital.details}</p>
                            </div>
                            <div className="flex items-center my-2">
                                <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2 text-xl" />
                                <a className='text-blue-600 hover:text-blue-400' href={`tel:${hospital.number}`}>{hospital.number}</a>
                            </div>
                            <div className="flex items-center my-2">
                                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2 text-xl" />
                                <a className='text-blue-600 hover:text-blue-400' href={`mailto:${hospital.email}`}>{hospital.email}</a>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faMapMarker} className="text-gray-600 mr-2 text-xl" />
                                <a className='text-blue-600 hover:text-blue-400' href={`https://maps.google.com/?q=${hospital.location}`} target="_blank" rel="noopener noreferrer">
                                    {hospital.location}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hospitals;