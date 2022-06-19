import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [emptyError, setEmptyError] = useState('');

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user || gUser)

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    let setError;
    if (error || gError || resetError) {
        setError = <p className='text-red-500 mb-[5px]'><small>{error?.message || gError?.message || resetError?.message}</small></p>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        reset()
        setEmptyError('');
    };

    const handleOnChange = event => {
        setUserEmail(event.target.value)
    }

    const handlePasswordReset = async () => {
        if (!userEmail) {
            const errorText = <p className='text-red-500 mb-[5px]'><small>Please enter your email first</small></p>
            setEmptyError(errorText)
        }
        else if (userEmail) {
            setEmptyError('');
            await sendPasswordResetEmail(userEmail);
            toast('Sent password reset email');
        }

    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-2xl font-normal text-accent'>Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    onChange: e => { handleOnChange(e) },
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must contain 6 character'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                            <div
                                onClick={handlePasswordReset}
                                className='text-accent mb-[10px] cursor-pointer'>
                                <p><small>Forgot Password?</small></p>
                            </div>
                        </div>
                        {setError || emptyError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <p className='text-xs'>
                        New to Doctors Portal?
                        <Link className='text-secondary' to='/signup'> Create new account
                        </Link>
                    </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;