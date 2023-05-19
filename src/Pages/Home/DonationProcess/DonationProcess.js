import React from 'react';
import separator from '../../../assets/separator/separator.png';
import registration from '../../../assets/DonationProcess/registration.jpg';
import screening from '../../../assets/DonationProcess/screening.jpg';
import donations from '../../../assets/DonationProcess/donations.png';
import refreshment from '../../../assets/DonationProcess/refreshment.jpg';
import DonationProcessCard from './DonationProcessCard';


const DonationProcess = () => {

    const processData = [
        {
            id: 1,
            name: 'REGISTRATION',
            description: 'You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.',
            img: registration
        },
        {
            id: 2,
            name: 'SCREENING',
            description: 'A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.',
            img: screening
        },
        {
            id: 3,
            name: 'DONATION',
            description: 'After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.',
            img: donations
        },
        {
            id: 4,
            name: 'REFRESHMENT',
            description: 'You can also stay in sitting room until you feel strong enough to leave our center. You will receive awesome drink from us in donation zone.',
            img: refreshment
        },
    ]

    return (
        <div className='pb-10'>
            <div>
                <h2 className='text-3xl font-bold text-center'>DONATION PROCESS</h2>
                <span >
                    <img className='m-auto' src={separator} alt="" />
                </span>
                <p className='text-center text-xl pb-5'>The donation process from the time you arrive center until the time you leave</p>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10'>   
                {
                    processData.map(process => <DonationProcessCard
                    key={process.id}
                    process={process}
                    ></DonationProcessCard>)
                }
            </div>
        </div>
    );
};

export default DonationProcess;