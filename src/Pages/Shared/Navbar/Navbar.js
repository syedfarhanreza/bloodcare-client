import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutUs">About Us</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/donors">Donor</Link></li>
        <li><Link to="/campaigns">Campaigns</Link></li>
        <li><Link to="/hospitals">Hospitals</Link></li>
        <li><Link to="/bloodRequests">Blood Requests</Link></li>
        <li><Link to="/search">Search</Link></li>
    </React.Fragment>
    const menuItemsEnd = <React.Fragment>
        {
            user?.uid ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link onClick={handleLogOut} className="btn btn-outline btn-warning" >Logout</Link></li>
                </>
                : <li><Link to="/login" className="btn btn-success">Login</Link></li>
        }
    </React.Fragment>
    return (
        <div className="navbar bg-red-600"> 
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-600 text-white font-bold rounded-box w-52">
                        {menuItems}
                        {menuItemsEnd}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-white normal-case text-xl">BloodCare</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white font-bold px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label htmlFor="dashboard-drawer" tabIndex={3} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal text-white font-bold px-1">
                        {menuItemsEnd}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;