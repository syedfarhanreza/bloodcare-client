import React from 'react';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a>Blogs</a></li>
        <li><a>Donor List</a></li>
        <li><a>Camp Details</a></li>
        <li><a>Hospital List</a></li>
        <li><a>Blood Requests</a></li>
    </React.Fragment>
    return (
        <div className="navbar bg-red-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-600 text-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-white normal-case text-xl">BloodCare</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;