import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const LogOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    const menuItems = <>
        <li><Link className='hover:bg-accent hover:text-white' to='/home'>Home</Link></li>
        <li><Link className='hover:bg-accent hover:text-white' to='/about'>About</Link></li>
        <li><Link className='hover:bg-accent hover:text-white' to='/appointment'>Appointment</Link></li>
        <li><Link className='hover:bg-accent hover:text-white' to='/reviews'>Reviews</Link></li>
        <li><Link className='hover:bg-accent hover:text-white' to='/contact'>Contact</Link></li>
        {
            user && <li><Link className='hover:bg-accent hover:text-white' to='/dashboard'>DashBoard</Link></li>
        }
        <li>{user ? <Link to='/home' onClick={LogOut} className="btn  btn-ghost capitalize">Sign Out</Link> : <Link className='hover:bg-accent hover:text-white' to='/login'>Login</Link>}</li>
    </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-active rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl hover:bg-accent hover:text-white">Doctors Portal</Link>
            </div>
            <div className="navbar-end  hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div  className="navbar-end flex lg:hidden">
                <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;