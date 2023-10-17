import React from 'react';
import separator from '../../../assets/separator/separator.png';
import DonationCampaignInfo from './DonationCampaignInfo';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const DonationCampaign = () => {

    const { data: campaigns } = useQuery({
        queryKey: ['campaigns'],
        queryFn: () => fetch('http://localhost:5000/campaigns')
            .then(res => res.json())
    });

    const displayedCampaigns = campaigns ? campaigns.slice(0, 3) : [];

    return (
        <div className='pb-20'>
            <div>
                <h1 className='text-5xl text-center font-bold uppercase'>Donation Campaigns</h1>
                <span>
                    <img className='m-auto' src={separator} alt="" />
                </span>
                <p className='text-center text-xl pb-5'>Campaigns to encourage new donors to join and existing to continue to give blood.</p>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 mb-10'>
                {
                    displayedCampaigns.map(campaign => (
                        <DonationCampaignInfo key={campaign.id} campaign={campaign} />
                    ))
                }
            </div>
            <div className='mx-auto text-center'>
                <Link to='/campaigns' className="btn btn-outline btn-accent shadow-xl">Load All Campaign</Link>
            </div>
        </div>
    );
};

export default DonationCampaign;