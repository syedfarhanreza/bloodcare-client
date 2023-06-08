import React from 'react';
import separator from '../../../assets/separator/separator.png';
import campaign1 from '../../../assets/Campaigns/campaign1.jpg';
import campaign2 from '../../../assets/Campaigns/campaign2.jpg';
import campaign3 from '../../../assets/Campaigns/campaign3.jpg';
import DonationCampaignInfo from './DonationCampaignInfo';

const DonationCampaign = () => {
    const campaignData = [
        {
            id: 1,
            name: 'Donation – Feel Real Peace',
            description: 'Every year, on 14 June, countries around the world celebrate World Blood Donor Day. The event serves to thank voluntary.',
            img: campaign1,
            location: 'Mohammad Ali Hospital, Bogra',
            time: '10AM-3PM'
        },
        {
            id: 2,
            name: 'You Are Somebody’s Type',
            description: 'Every year, on 14 June, countries around the world celebrate World Blood Donor Day. The event serves to thank voluntary.',
            img: campaign3,
            location: 'Coloni, Bogra',
            time: '10AM-3PM'
        },
        {
            id: 3,
            name: 'You Are Somebody’s Type',
            description: 'Every year, on 14 June, countries around the world celebrate World Blood Donor Day. The event serves to thank voluntary.',
            img: campaign3,
            location: 'Pundra University, Bogra',
            time: '10AM-3PM'
        },
    ]
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
                    campaignData.map(campaign => <DonationCampaignInfo
                        key={campaign.id}
                        campaign={campaign}
                    ></DonationCampaignInfo>)
                }
            </div>
            <div className='mx-auto text-center'>
                <button className="btn btn-outline btn-accent shadow-xl">Load All Campaign</button>
            </div>
        </div>
    );
};

export default DonationCampaign;