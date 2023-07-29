import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';


const RequestModal = ({ bloodRequest, setBloodRequest, selectedDate }) => {
    const { name, slots } = bloodRequest;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const [selectedTime, setSelectedTime] = useState(new Date());

    const handleRequest = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const applicantName = form.applicantName.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            requestedDate: date,
            bloodRequest: name,
            applicant: applicantName,
            slot,
            email,
            phone,
            requestedTime: selectedTime.toLocaleTimeString(),
        }

        fetch('http://localhost:5000/requests', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBloodRequest(null);
                    toast.success('Request Confirmed')
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="request-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="request-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-red-600 font-bold">Blood Group: {name}</h3>
                    <form onSubmit={handleRequest} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <DatePicker
                            selected={selectedTime}
                            onChange={date => setSelectedTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            className="input w-full input-bordered"
                        />
                        {/* <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select> */}
                        <input name="applicantName" type="text" defaultValue={user?.displayName} required placeholder="Your Name" disabled className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} required placeholder="Email Address" disabled className="input w-full input-bordered" />
                        <input name="phone" type="text" required placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default RequestModal;