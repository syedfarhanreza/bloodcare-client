import React from 'react';
import { useForm } from 'react-hook-form';
import separator from '../../../assets/separator/separator.png'

const AddHospital = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleAddHospital = data => {
        console.log(data);
    }
    return (
        <div className='h-[800px] flex bg-grey-400 justify-center items-center mb-7'>
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
                        <input type="email" {...register("email", {
                            required: "Email is Required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })} className="input input-bordered w-full" />
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
                            required: "Details is Required"
                        })} className="textarea textarea-bordered w-full" />
                        {errors.details && <p className='text-red-500'>{errors.details.message}</p>}
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label"> <span className="label-text font-bold">Upload Image</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="w-full" />
                        {errors.file && <p className='text-red-600' role="alert">{errors.file?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4 mb-3' value="Add Hospital" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddHospital;