import React from 'react';
import Banner from '../Banner/Banner';
import BannerSlider from '../BannerSlider/BannerSlider';
import DonationProcess from '../DonationProcess/DonationProcess';
import BecomeDonor from '../BecomeDonor/BecomeDonor';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BannerSlider></BannerSlider>
           <DonationProcess></DonationProcess>
           <BecomeDonor></BecomeDonor>
        </div>
    );
};

export default Home;