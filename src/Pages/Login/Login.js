import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
   
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" 
                        {...register("email", {
                            required: "Email Address is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                              }
                        })} 
                        className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                         {...register("password", {
                            required: "Password is required",
                            minLength: {value: 6, message: 'Password must be 6 characters or longer'},
                        })} 
                         className="input input-bordered w-full max-w-xs" />
                         {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full mb-2' value="Login" type="submit" />
                </form>
                <p>New to BloodCare? <Link className='text-blue-600' to="/register">Register here!!!</Link></p>
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

export default Login;