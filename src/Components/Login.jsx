import React from 'react';
import logo from '../assets/logo/ultimate hrm logo-05-02 5.png'
import image from '../assets/image/istockphoto-1321277096-612x612 1.png'
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <div className='flex justify-center items-center my-16'>
            <div className='w-3/5'>
                <img src={logo} alt="logo" className='w-44'/>
                <img src={image} alt="Banner" />
            </div>
            <div className='w-[40%]'>
                <div className="flex flex-col w-full px-12 py-28 shadow-2xl shadow-gray-300 text-center rounded">
                    <h1 className="text-3xl font-bold text-accent mb-20">Log In Form</h1>
                    <form noValidate="" className="flex flex-col gap-10">
                        <div className="flex flex-col gap-8">
                            <input {...register("email", { required: true })} id="email" type="email" placeholder="Write Email address" className="text-gray-700 border outline-none border-x-0 border-t-0 px-5" data-temp-mail-org="1" />
                            <input {...register("password", { pattern: /^(?=.*\d).{8,}$/ })} id="password" type="text" placeholder="Write Password" className="text-gray-700 outline-none border border-x-0 border-t-0 px-5" />
                        </div>  
                        <button type="button" className="w-1/4 mx-auto duration-300 shadow-xl shadow-gray-300 px-4 py-2 rounded-xl font-semibold bg-secondary text-white hover:bg-gray-50 hover:text-secondary border border-transparent hover:border-secondary">Sign in</button>
                    </form>
                </div>

                {/* <h1 className='font-semibold text-4xl'>Log In Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                    <input {...register("email", { required: true })} />
                    <input {...register("password", { pattern: /^(?=.*\d).{8,}$/ })} />
                    <button type='submit'>Log In</button>
                </form> */}
            </div>
        </div>
    );
};

export default Login;