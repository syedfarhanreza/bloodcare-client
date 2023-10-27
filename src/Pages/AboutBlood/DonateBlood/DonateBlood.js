import React from 'react';

const DonateBlood = () => {
    return (
        <div className='w-4/5 h-auto mx-auto mt-10 mb-56'>
            <h1 className='text-4xl font-bold'>Who can donate blood?</h1>
            <div className='text-lg my-20'>
                <p>
                    Most people can give blood. You can give blood if you:
                    <ul className='list-disc mt-3 ml-14'>
                        <li>are fit and healthy</li>
                        <li>weigh between 7 stone 12 lbs and 25 stone, or 50kg and 160kg</li>
                        <li>are aged between 17 and 66 (or 70 if you have given blood before)</li>
                        <li>are over 70 and have given blood in the last two years</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default DonateBlood;