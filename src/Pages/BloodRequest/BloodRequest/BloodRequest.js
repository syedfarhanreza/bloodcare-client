import React, { useState } from 'react';
import BloodRequestBanner from '../BloodRequestBanner/BloodRequestBanner';
import AvailableRequest from '../AvailableRequest/AvailableRequest';

const BloodRequest = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <BloodRequestBanner
               selectedDate = {selectedDate}
               setSelectedDate = {setSelectedDate}     
            ></BloodRequestBanner>
            <AvailableRequest
                selectedDate = {selectedDate}
            ></AvailableRequest>
        </div>
    );
};

export default BloodRequest;