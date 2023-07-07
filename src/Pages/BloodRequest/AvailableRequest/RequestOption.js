import React from 'react';

const RequestOption = ({ requestOption }) => {
    const { name, img, slots } = requestOption;
    return (
        <div className="card card-compact  shadow-xl hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img className='w-full' src={img} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-red-600">Blood Group: {name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ?  'spaces' : 'space'} available</p>
                <div className="card-actions justify-end">
                    <button className=" bg-red-600 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full">Request For Blood</button>
                </div>
            </div>
        </div>
    );
};

export default RequestOption;