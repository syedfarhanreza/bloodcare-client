import { format } from 'date-fns';
import React, { useState } from 'react';
import bloodTypes from '../../../assets/BloodRequestBanner/types of blood.jpg'
import RequestOption from './RequestOption';
import RequestModal from '../RequestModal/RequestModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableRequest = ({ selectedDate }) => {
    const [bloodRequest, setBloodRequest] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: bloodGroups = [], refetch , isLoading} = useQuery({
        queryKey: ['bloodGroups', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bloodGroups?date=${date}`)
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='mt-16 bg-base-100 mx-20 my-20'>
            <div className='w-1/4 mx-auto mb-6'>
                <img src={bloodTypes} alt="Types of blood Banner" />
            </div>
            <p className='text-center text-red-600 font-bold text-2xl'>Blood Request on {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    bloodGroups?.map(option => <RequestOption
                        key={option._id}
                        requestOption={option}
                        setBloodRequest={setBloodRequest}
                    ></RequestOption>)
                }
            </div>
            {
                bloodRequest &&
                <RequestModal
                    selectedDate={selectedDate}
                    bloodRequest={bloodRequest}
                    setBloodRequest={setBloodRequest}
                    refetch = {refetch}
                ></RequestModal>}
        </section>
    );
};

export default AvailableRequest;