import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import separator from '../../../assets/separator/separator.png';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';


const AddCampaign = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const date = selectedDate ? format(selectedDate, 'PP') : null;

    const navigate = useNavigate();

    const handleAddCampaign = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const campaign = {
                        title: data.title,
                        details: data.details,
                        number: data.number,
                        location: data.location,
                        date: date,
                        time: selectedTime instanceof Date ? selectedTime.toLocaleTimeString() : null,
                        image: imgData.data.url,
                    }
                    fetch('http://localhost:5000/campaigns', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(campaign)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.title} is added successfully`);
                            navigate('/dashboard/manageCampaigns')
                        })
                }
            })
    }
    return (
        <div className='h-[800px] w= flex justify-center items-center my-2  '>
            <div className='w-3/5  bg-slate-300 p-7 shadow-xl rounded-xl '>
                <h2 className="text-3xl text-center font-bold ">Add Campaign</h2>
                <img className='m-auto' src={separator} alt="separator" />
                <form onSubmit={handleSubmit(handleAddCampaign)}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text font-bold">Campaign Title</span></label>
                        <input type="text" {...register("title", {
                            required: "Campaign Title is Required"
                        })} className="input input-bordered w-full" />
                        {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold">Campaign Details</span></label>
                        <textarea type="text" {...register("details", {
                            required: "Campaign details is Required"
                        })} className="textarea textarea-bordered w-full" />
                        {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text font-bold">Contact Number</span></label>
                        <input type="text" {...register("number", {
                            required: "Contact Number is Required"
                        })} className="input input-bordered w-full" />
                        {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text font-bold">Campaign Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Campaign Location is Required"
                        })} className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Select Date</span>
                            </label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                placeholderText="Select Date"
                                className="input w-full input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Select Time</span>
                            </label>
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
                        </div>
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label"> <span className="label-text font-bold">Upload Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is Required"
                        })} className="w-full" />
                        {errors.image && <p className='text-red-600' role="alert">{errors.image?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4 mb-3' value="Add Campaign" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddCampaign;