import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/ultimate hrm logo-05-02 5.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navbar = <div className='flex lg:flex-row flex-col gap-x-5 gap-y-4'>
        {/* <Link to='/home'className=' bg-gray-100 bg-gradient-to-r bg-neutral from-secondary hover:bg-primary hover:bg-gradient-to-l hover:from-secondary text-white duration-500 py-1 px-2 rounded shadow-xl shadow-gray-200'><li>Home</li></Link> */}
        <Link to='/test' className=' bg-gradient-to-r bg-neutral from-secondary hover:bg-primary hover:bg-gradient-to-l hover:from-secondary text-white duration-500 py-1 px-2 rounded shadow-xl shadow-gray-300'><li>Attendance</li></Link>
    </div>
    const logOutHandle = () => {
        logOut()
            .then(() => toast.success('User logged out'))
            .catch(() => { })
    }
    return (
        <div className="navbar bg-base-100 my-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg w-52">
                        {navbar}
                    </ul>
                </div>
                <img src={logo} alt="logo" className='lg:w-40 md:w-36 w-24' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 duration-300">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button onClick={logOutHandle} className='bg-gradient-to-r bg-neutral from-secondary hover:bg-primary hover:bg-gradient-to-l hover:from-secondary text-white duration-500 py-1 px-4 rounded-md'>log out</button> : <Link to='/login'><button className='bg-gradient-to-r bg-neutral from-secondary hover:bg-primary hover:bg-gradient-to-l hover:from-secondary text-white duration-500 py-1 px-4 rounded-md'>Sign In</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;