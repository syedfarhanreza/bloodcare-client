import React from 'react';
import Banner from '../Banner/Banner';
import BannerSlider from '../BannerSlider/BannerSlider';
import DonationProcess from '../DonationProcess/DonationProcess';
import BecomeDonor from '../BecomeDonor/BecomeDonor';
import DonationCampaign from '../DonationCampaigns/DonationCampaign';
import ContactUs from '../../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
           <Banner></Banner>
           <BannerSlider></BannerSlider>
           <DonationProcess></DonationProcess>
           <BecomeDonor></BecomeDonor>
           <DonationCampaign></DonationCampaign>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;