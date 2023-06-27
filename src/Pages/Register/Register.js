import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser} = useContext(AuthContext);
    const handleRegister = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    }

    return (
        <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/wQfbkcf/blood.jpg")` , backgroundRepeat: 'no-repeat'} }>
            <div className='flex justify-center items-center font-extrabold'>
            <div className='w-auto p-7 my-10 shadow-2xl' >
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
                    <div className='grid gap-4 grid-cols-2 '>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Phone Number</span></label>
                            <input type="text"
                                {...register("number", {
                                    required: "Please input your phone number",
                                    pattern: /[0-9]{11}/,
                                    maxLength: { value: 11, message: "Enter correct number" },
                                    minLength: { value: 11, message: "Enter correct number" },
                                })}
                                className="input input-bordered w-full" />
                            {errors.number && <p className='text-red-600' role="alert">{errors.number?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">NID Number</span></label>
                            <input type="text"
                                {...register("nid", {
                                    required: "Please input your NID number",
                                    pattern: /[0-9]{10}/,
                                    maxLength: { value: 10, message: "Enter correct number" },
                                    minLength: { value: 10, message: "Enter correct number" },
                                })}
                                className="input input-bordered w-full" />
                            {errors.nid && <p className='text-red-600' role="alert">{errors.nid?.message}</p>}
                        </div>
                    </div>
                    <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1'>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text 77">Date of Birth</span></label>
                            <input type="date"
                                {...register("dob", {
                                    required: "Please input your date of birth",
                                })}
                                className="input input-bordered w-full" />
                            {errors.dob && <p className='text-red-600' role="alert">{errors.dob?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Gender</span></label>
                            <select type="gender"
                                {...register("gender", {
                                    required: "Please input your name",
                                })}
                                className="select select-bordered w-full font-bold">
                                <option className='font-bold' disabled selected>Select Gender</option>
                                <option className='font-bold' value="female">Female</option>
                                <option className='font-bold' value="male">Male</option>
                                <option className='font-bold' value="other">Other</option>
                            </select>
                            {errors.gender && <p className='text-red-600' role="alert">{errors.gender?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Blood Group</span></label>
                            <select type="text"
                                {...register("blood", {
                                    required: "Please input your Blood Group",
                                })}
                                className="input input-bordered w-full font-bold" >
                                <option disabled selected>Select Blood Group</option>
                                <option className='font-bold' value="a+">A+</option>
                                <option className='font-bold' value="a-">A-</option>
                                <option className='font-bold' value="b+">B+</option>
                                <option className='font-bold' value="b-">B-</option>
                                <option className='font-bold' value="ab+">AB+</option>
                                <option className='font-bold' value="ab-">AB-</option>
                                <option className='font-bold' value="o+">O+</option>
                                <option className='font-bold' value="o-">O-</option>
                            </select>
                            {errors.blood && <p className='text-red-600' role="alert">{errors.blood?.message}</p>}
                        </div>
                    </div>
                    <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-1'>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text 77">Address</span></label>
                            <input type="text"
                                {...register("address", {
                                    required: "Please input your address",
                                })}
                                className="input input-bordered w-full" />
                            {errors.address && <p className='text-red-600' role="alert">{errors.address?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">District</span></label>
                            <input type="text"
                                {...register("district", {
                                    required: "Please input your district",
                                })}
                                className="input input-bordered w-full font-bold" />
                            {errors.district && <p className='text-red-600' role="alert">{errors.district?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Country</span></label>
                            <input type="text"
                                {...register("country", {
                                    required: "Please input your county",
                                })}
                                className="input input-bordered w-full font-bold" />
                            {errors.country && <p className='text-red-600' role="alert">{errors.country?.message}</p>}
                        </div>

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
                    </div>
                    <div className='grid gap-5 grid-cols-2 mb-5'>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Register As</span></label>
                            <select type="user"
                                {...register("user", {
                                    required: "Please input your name",
                                })}
                                className="select select-bordered w-full font-bold">
                                <option className='font-bold' disabled selected>Select User</option>
                                <option className='font-bold' value="donor">Donor</option>
                                <option className='font-bold' value="recipient">Recipient</option>
                                <option className='font-bold' value="both">Both</option>
                            </select>
                            {errors.user && <p className='text-red-600' role="alert">{errors.user?.message}</p>}
                        </div>
                        <div className="form-control w-full mb-3">
                            <label className="label"><span className="label-text">Upload Image</span></label>
                            <input type="file"
                                {...register("image", {
                                    required: "Please input your image",
                                }
                                )}
                                className="w-full" />
                            {errors.file && <p className='text-red-600' role="alert">{errors.file?.message}</p>}
                        </div>
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
        </div>
    );
};

export default Register;