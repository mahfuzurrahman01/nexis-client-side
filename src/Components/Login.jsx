import React from 'react';
import logo from '../assets/logo/ultimate hrm logo-05-02 5.png'
import image from '../assets/image/istockphoto-1321277096-612x612 1.png'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const Login = () => {
    const navigate = useNavigate()
    const { signInWithEmailPass } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)

        signInWithEmailPass(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user?.email) {
                    fetch(`http://localhost:5000/jwt?email=${user?.email}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.token) {
                                localStorage.setItem('token', data.token)
                            }
                        })
                }
                if (user?.email) {
                    fetch('http://localhost:5000/signIn', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Login successful')
                                navigate('/test')
                            }
                        })
                }
            })
            .catch(err => toast.error(err.message))
    }


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