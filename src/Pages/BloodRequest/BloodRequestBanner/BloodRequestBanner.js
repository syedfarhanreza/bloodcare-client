import React from 'react';
import bloodRequest from '../../../assets/BloodRequestBanner/bloodRequest.jpg'
import { DayPicker } from 'react-day-picker';





const BloodRequestBanner = ({ selectedDate, setSelectedDate }) => {

    const today = new Date();
    const isPastDay = (day) => {
      const isPast = day < today;
      const isToday = day.toDateString() === today.toDateString();
      return isPast && !isToday;
    };

    return (
        <header>
            <div className="hero p-10" style={{ backgroundImage: `url("https://i.ibb.co/kMVZydc/BloodRB.jpg")`, backgroundRepeat: 'no-repeat', width: 'min-h-screen' }} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bloodRequest} className="max-w-sm  rounded-lg shadow-2xl" alt='bloodRequest' />
                    <div className='mr-20 mb-6 bg-white rounded-lg shadow-2xl'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={isPastDay}

                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BloodRequestBanner;