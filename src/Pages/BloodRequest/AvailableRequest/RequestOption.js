import React from 'react';

const RequestOption = ({ requestOption, setBloodRequest }) => {
    const { name, img } = requestOption;
    return (
        <div className="card card-compact  shadow-xl hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img className='w-full' src={img} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-red-600">Blood Group: {name}</h2>
                <div className="card-actions justify-end">
                    <label 
                    htmlFor="request-modal" 
                    className=" bg-red-600 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full"
                    onClick={() => setBloodRequest(requestOption)}
                    >Request For Blood</label>
                </div>
            </div>
        </div>
    );
};

export default RequestOption;