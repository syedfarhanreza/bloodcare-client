import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleRegister = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-2/4 p-7'>
                <h2 className='text-xl text-center font-bold'>Registration Form</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Full Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Please input your name",
                            })}
                            className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Phone Number</span></label>
                        <input type="text"
                            {...register("number", {
                                required: "Please input your phone number",
                                pattern: /[0-9]{11}/,
                                maxLength: {value:11, message:"Enter correct number"},
                                minLength: {value:11, message:"Enter correct number"},
                            })}
                            className="input input-bordered w-full" />
                        {errors.number && <p className='text-red-600' role="alert">{errors.number?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label"><span className="label-text">Upload Image</span></label>
                        <input type="file"
                            {...register("image", {
                                required: "Please input your image",
                            })}
                            className="w-full" />
                        {errors.file && <p className='text-red-600' role="alert">{errors.file?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mb-2' value="Register" type="submit" />
                </form>
                <p>Already registered? <Link className='text-blue-600' to="/login">Login here!!!</Link></p>
                <div className="divider">OR</div>
                <p>Social Connect: </p>
                <div className='flex gap-5 justify-center'>
                    <h1>Google </h1>
                    <h1>Facebook </h1>
                    <h1>LinkedIn</h1>
                </div>
            </div>
        </div>
    );
};

export default Register;