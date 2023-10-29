import React from 'react';

const HowDonateBlood = () => {
    return (
        <div className='w-4/5 mx-auto my-14'>
            <h1 className='text-4xl mb-10 font-bold'>How often can I donate blood?</h1>
            <div className='text-lg'>
                <p>
                    Men can give blood every 12 weeks and women can give blood every 16 weeks. Find out more about what happens on the day of your donation.
                </p>
                <p>
                    The common reasons donors should check if they can give blood are:
                    <ul className='list-disc mt-3 ml-14'>
                        <li>If you are receiving medical or hospital treatment</li>
                        <li>If you are taking medication</li>
                        <li>during and after pregnancy</li>
                        <li>If you feel ill</li>
                        <li>If you have cancer</li>
                        <li>After receiving blood, blood products, or organs.</li>
                        <li>Women under 20 – check if you can give blood.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default HowDonateBlood;