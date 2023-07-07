import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import bloodTypes from '../../../assets/BloodRequestBanner/types of blood.jpg'
import RequestOption from './RequestOption';

const AvailableRequest = ({selectedDate}) => {
    const [bloodGroups, setBloodGroups] = useState([])

    useEffect(() => {
        fetch('bloodGroups.json')
        .then(res => res.json())
        .then(data => setBloodGroups(data))
    },[])

    return (
        <section className='mt-16 bg-base-100 mx-20 my-20'>
            <div className='w-1/4 mx-auto mb-6'>
                <img  src={bloodTypes} alt="Types of blood Banner" />
            </div>
            <p className='text-center text-red-600 font-bold text-2xl'>Blood Request on {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                   bloodGroups.map(option => <RequestOption
                   key={option._id}
                   requestOption = {option}
                   ></RequestOption>) 
                }
            </div>
        </section>
    );
};

export default AvailableRequest;