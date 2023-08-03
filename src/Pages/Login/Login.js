import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            });
    }

    return (
        <div className='hero min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/kMVZydc/BloodRB.jpg")`, backgroundRepeat: 'no-repeat', }}>
            <div className='h-[800px] flex  justify-center items-center font-bold'>
                <div className='w-[400px]  bg-slate-300 p-7 my-10 shadow-2xl'>
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
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                    })}
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state on button click
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                            {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                            <label className="label"><span className="label-text">Forget Password?</span></label>
                        </div>
                        <input className='btn btn-accent w-full max-w-xs mb-2' value="Login" type="submit" />
                        <div>
                            {loginError && <p className='text-red-600'> {loginError} </p>}
                        </div>
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
        </div>
    );
};

export default Login;