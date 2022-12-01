import React, { useState } from 'react';
import logo from '../assets/logo/ultimate hrm logo-05-02 5.png'
import image from '../assets/image/istockphoto-1321277096-612x612 1.png'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Register = () => {
    const [info, setInfo] = useState({})
    const [error, setError] = useState('')
    const [formState, setFormState] = useState(1)
    const blurHandle = (event) => {
        event.preventDefault()
        const field = event.target.name;
        const value = event.target.value;
        const obj = { ...info }
        obj[field] = value
        setInfo(obj)
    }
    const changePass = (event) => {
        setError('')
        event.preventDefault()
        const value = event.target.value;
        if (value.length < 8) {
            setError('Your password must be 8 characters')
        }

    }
    const signUpHandle = () => {
        if (info.password.length < 8) {
            setError('Your password must be 8 characters')
            return
        }
        
    }
    return (
        <div className='flex justify-center items-center my-16'>
            <div className='w-3/5'>
                <img src={logo} alt="logo" className='w-44' />
                <img src={image} alt="Banner" />
            </div>
            <div className='w-[40%]'>
                <div className="flex flex-col w-full px-16 py-28 shadow-2xl shadow-gray-400 rounded">
                    <h1 className="text-3xl font-bold text-accent mb-20 text-center">Sign Up Form</h1>
                    {
                        formState === 1 && <form className="flex flex-col relative">
                            <div className='flex flex-col gap-10'>
                                <input onBlur={blurHandle} name='first_name' id="firstName" required type="text" placeholder="Write First Name" className="text-gray-700 text-md border outline-none border-x-0 border-t-0 px-5" data-temp-mail-org="1" />
                                <input onBlur={blurHandle} name='last_name' required id="secondName" type="text" placeholder="Write Last Name" className="text-gray-700 text-md outline-none border border-x-0 border-t-0 px-5" />
                            </div>

                            <button onClick={() => setFormState(formState + 1)} type="submit" className="w- mt-10 mx-auto duration-300 shadow-xl shadow-gray-300 px-4 py-2 rounded-xl font-semibold bg-secondary text-white hover:bg-gray-50 hover:text-secondary border border-transparent hover:border-secondary flex gap-x-1 items-center justify-center">Next step < BsArrowRight></ BsArrowRight></button>

                        </form>
                    }
                    {
                        formState === 2 && <form className="flex flex-col relative">
                            <div className='flex flex-col gap-10'>
                                <div className='flex justify-center gap-2'>
                                    <input type="text" placeholder='+880' className='w-20 text-center text-md border border-x-0 border-t-0' disabled />
                                    <input onBlur={blurHandle} name='phone_number' id="email" required type="number" placeholder="1xxxxxxx" className="text-gray-700 w-full border outline-none border-x-0 border-t-0 px-5 text-md" data-temp-mail-org="1" />
                                </div>
                                <input onBlur={blurHandle} name='email' required type="text" placeholder="Write Email Address" className="text-gray-700 outline-none border text-md border-x-0 border-t-0 px-5" />
                            </div>

                            <button onClick={() => setFormState(formState + 1)} type="submit" className=" mt-10 mx-auto duration-300 shadow-xl shadow-gray-300 px-4 py-2 rounded-xl font-semibold bg-secondary text-white hover:bg-gray-50 hover:text-secondary border border-transparent hover:border-secondary flex gap-x-1 items-center justify-center">Next step < BsArrowRight></ BsArrowRight></button>
                            <button className='text-secondary border py-1 px-2 rounded-lg border-secondary font-semibold absolute bottom-1 left-16' onClick={() => setFormState(1)}>Back</button>
                        </form>
                    }
                    {
                        formState === 3 && <form className="flex flex-col relative">
                            <div className='flex flex-col gap-y-2'>
                                <input onChange={changePass} onBlur={blurHandle} name='password' required id="password" type="password" placeholder="Write Password" className="text-gray-700 outline-none border border-x-0 border-t-0 px-5 text-md" />
                                {
                                    error && <p className='text-red-500 text-xs ml-2'>{error}</p>
                                }
                            </div>

                            <p onClick={signUpHandle} className=" mt-10 cursor-pointer mx-auto duration-300 shadow-xl shadow-gray-300 px-4 py-2 rounded-xl font-semibold bg-secondary text-white hover:bg-gray-50 hover:text-secondary border border-transparent hover:border-secondary flex gap-x-1 items-center justify-center">Sign up</p>
                            <button className='text-secondary border py-1 px-2 rounded-lg border-secondary font-semibold absolute bottom-1 left-16' onClick={() => setFormState(2)}>Back</button>
                        </form>
                    }
                    <p className='text-center text-gray-600 text-sm mt-10'>Already have an account? <span className='text-primary underline'><Link to='/login'>Login Here</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;