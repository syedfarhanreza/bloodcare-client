import React from 'react';

const GroupsOfBlood = () => {
    return (
        <div className='w-4/5 mx-auto mt-7 mb-20'>
            <h1 className='text-4xl font-bold mb-10'>Different Blood Groups</h1>
            <div className='text-lg'>
                <p>
                    There are 8 different blood groups. They are:
                    <ul className='list-disc ml-14 mt-3'>
                        <li>A+</li>
                        <li>A-</li>
                        <li>B+</li>
                        <li>B-</li>
                        <li>O+</li>
                        <li>O-</li>
                        <li>AB+</li>
                        <li>AB-</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default GroupsOfBlood;