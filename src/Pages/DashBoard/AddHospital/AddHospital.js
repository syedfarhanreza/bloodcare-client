import React from 'react';
import { useForm } from 'react-hook-form';
import separator from '../../../assets/separator/separator.png'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddHospital = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddHospital = data => {
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
           if(imgData.success){
            console.log(imgData.data.url);
            const hospital = {
                name: data.name,
                email: data.email,
                number: data.number,
                location: data.location,
                details: data.details,
                image:  imgData.data.url
            }
            // save hospital information to the database
            fetch('http://localhost:5000/hospitals', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(hospital)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/manageHospitals')
            })
           }
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center mb-7'>
            <div className='w-2/5  bg-slate-300 p-7 shadow-xl '>
                <h2 className="text-3xl text-center font-bold ">Add Hospital</h2>
                <img className='m-auto' src={separator} alt="separator" />
                <form onSubmit={handleSubmit(handleAddHospital)}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text font-bold">Hospital Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Hospital Name is Required"
                        })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text font-bold">Email</span></label>
                        <input type="email" {...register("email")} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text font-bold">Contact Number</span></label>
                        <input type="text" {...register("number", {
                            required: "Number is Required",
                            pattern: /[0-9]{11}/,
                            maxLength: { value: 11, message: "Enter correct number" },
                            minLength: { value: 11, message: "Enter correct number" },
                        })} className="input input-bordered w-full " />
                        {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Location is Required"
                        })} className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold">Hospital Details</span></label>
                        <textarea type="text" {...register("details", {
                            required: "Hospital details is Required"
                        })} className="textarea textarea-bordered w-full" />
                        {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label"> <span className="label-text font-bold">Upload Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Image is Required"
                        })} className="w-full" />
                        {errors.image && <p className='text-red-600' role="alert">{errors.image?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4 mb-3' value="Add Hospital" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddHospital;