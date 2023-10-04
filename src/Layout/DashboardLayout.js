import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 h-full bg-base-200 text-base-content">

                        <li><Link to='/dashboard'>My Blood Requests</Link></li>
                        {
                            isAdmin && <>
                                    <li><Link to='/dashboard/allusers'>All Users </Link></li>
                                    <li><Link to='/dashboard/add-hospital'>Add Hospital </Link></li>
                                    <li><Link to='/dashboard/manageHospitals'>Manage Hospitals </Link></li>
                                    <li><Link to='/dashboard/add-blog'>Add Blog</Link></li>
                                    <li><Link to='/dashboard/manageBlogs'>Manage Blogs</Link></li>
                                {/* <div className="dropdown dropdown-bottom w-full px-4 py-3 bg-base-200 hover:bg-base-300 rounded-xl">
                                    <label tabIndex={0}>Hospitals</label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-46">
                                        <li><Link to='/dashboard/add-hospital'>Add Hospital </Link></li>
                                        <li><Link to='/dashboard/manageHospitals'>Manage Hospitals </Link></li>
                                    </ul>
                                </div> */}
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;