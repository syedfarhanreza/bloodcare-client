import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';


const RequestModal = ({ bloodRequest, setBloodRequest, selectedDate, refetch }) => {
    const { name } = bloodRequest;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const [selectedTime, setSelectedTime] = useState(null);

    const {data: hospitalNames, isLoading} = useQuery({
        queryKey: ['name'],
        queryFn: async() => {
          const res = fetch('http://localhost:5000/hospitalName');
          const data = (await res).json();
          return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    const handleRequest = event => {
        event.preventDefault();
        const form = event.target;
        const applicantName = form.applicantName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const hospital = form.hospital.value;
        const message = form.message.value;
        const status = 'pending';

        const booking = {
            requestedDate: date,
            bloodRequest: name,
            applicant: applicantName,
            email,
            phone,
            requestedTime: selectedTime.toLocaleTimeString(),
            hospital,
            message,
            status,
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
                    toast.success('Request Confirmed');
                    refetch();
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
                            required
                            selected={selectedTime}
                            onChange={date => setSelectedTime(date)}
                            showTimeSelect
                            showTimeSelectOnly
                            placeholderText="Select Time"
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            className="input w-full input-bordered"
                        />
                        <input name="applicantName" type="text" defaultValue={user?.displayName} required placeholder="Your Name" disabled className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} required placeholder="Email Address" disabled className="input w-full input-bordered" />
                        <input name="phone" type="text" required placeholder="Phone Number" className="input w-full input-bordered" />
                        <div>
                            <select name="hospital" type="text" required className="select select-bordered w-full ">
                                <option disabled selected>Select Hospital</option>
                                {
                                    hospitalNames.map(hospitalName => <option
                                        key={hospitalName._id}
                                        value={hospitalName.name}
                                    >{hospitalName.name}</option> )
                                }
                            </select>
                        </div>
                        <input name="message" type="text" required placeholder="Your Message" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default RequestModal;