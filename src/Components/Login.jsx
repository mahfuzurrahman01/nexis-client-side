import React from 'react';
import logo from '../assets/logo/ultimate hrm logo-05-02 5.png'
import image from '../assets/image/istockphoto-1321277096-612x612 1.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <div className='flex justify-center items-center my-16'>
            <div className='w-3/5'>
                <img src={logo} alt="logo" className='w-44' />
                <img src={image} alt="Banner" />
            </div>
            <div className='w-[40%]'>
                <div className="flex flex-col w-full px-16 py-28 shadow-2xl shadow-gray-400 rounded">
                    <h1 className="text-3xl font-bold text-accent mb-20 text-center">Log In Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <div className='flex flex-col gap-10'>
                            <input {...register("email")} id="email" required type="email" placeholder="Write Email address" className="text-gray-700 text-md border outline-none border-x-0 border-t-0 px-5" data-temp-mail-org="1" />
                            <input {...register("password", { pattern: /^(?=.*\d).{8,}$/ })} id="password" type="password" placeholder="Write Password" className="text-gray-700 outline-none border border-x-0 border-t-0 px-5 text-md" />
                        </div>
                        {errors.password && <p className='text-red-500 text-xs'>Password must be 8 characters</p>}
                        <button type="submit" className="w-1/4 mt-10 mx-auto duration-300 shadow-xl shadow-gray-300 px-4 py-2 rounded-xl font-semibold bg-secondary text-white hover:bg-gray-50 hover:text-secondary border border-transparent hover:border-secondary">Sign in</button>
                    </form>
                    <p className='text-center text-gray-600 text-sm mt-10'>Don't have an account? <span className='text-primary underline'><Link to='/signup'>Sign up here</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;