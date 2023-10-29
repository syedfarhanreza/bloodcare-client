import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";   
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BloodRequest from "../../Pages/BloodRequest/BloodRequest/BloodRequest";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import DashboardLayout from "../../Layout/DashboardLayout";
import RequestForBlood from "../../Pages/DashBoard/RequestForBlood/RequestForBlood";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddHospital from "../../Pages/DashBoard/AddHospital/AddHospital";
import ManageHospitals from "../../Pages/DashBoard/ManageHospitals/ManageHospitals";
import ManageBlogs from "../../Pages/DashBoard/ManageBlogs/ManageBlogs";
import PostBlog from "../../Pages/DashBoard/PostBlog/PostBlog";
import AddCampaign from "../../Pages/DashBoard/AddCampaign/AddCampaign";
import ManageCampaigns from "../../Pages/DashBoard/ManageCampaigns/ManageCampaigns";
import Blogs from "../../Pages/Blogs/Blogs";
import Campaigns from "../../Pages/Campaigns/Campaigns";
import Donors from "../../Pages/Donors/Donors";
import Hospitals from "../../Pages/Hospitals/Hospitals";
import AboutBlood from "../../Pages/AboutBlood/AboutBlood/AboutBlood";
import BloodDonation from "../../Pages/AboutBlood/BloodDonation/BloodDonation";
import DonateBlood from "../../Pages/AboutBlood/DonateBlood/DonateBlood";
import HowDonateBlood from "../../Pages/AboutBlood/HowDonateBlood/HowDonateBlood";
import BloodTerms from "../../Pages/AboutBlood/BloodTerms/BloodTerms";
import GroupsOfBlood from "../../Pages/AboutBlood/GroupsOfBlood/GroupsOfBlood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/bloodRequests',
                element: <BloodRequest></BloodRequest>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/campaigns',
                element: <Campaigns></Campaigns>
            },
            {
                path: '/donors',
                element: <Donors></Donors>
            },
            {
                path: '/hospitals',
                element: <Hospitals></Hospitals>
            }, 
            {
                path: '/what-is-blood',
                element: <AboutBlood></AboutBlood>
            }, 
            {
                path: '/what-is-blood-donation',
                element: <BloodDonation></BloodDonation>
            }, 
            {
                path: '/who-can-donate-blood',
                element: <DonateBlood></DonateBlood>
            }, 
            {
                path: '/how-often-can-i-donate-blood',
                element: <HowDonateBlood></HowDonateBlood>
            }, 
            {
                path: '/different-blood-terms',
                element: <BloodTerms></BloodTerms>
            }, 
            {
                path: '/different-blood-groups',
                element: <GroupsOfBlood></GroupsOfBlood>
            }, 
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <RequestForBlood></RequestForBlood>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/add-hospital',
                element: <AdminRoute><AddHospital></AddHospital></AdminRoute>
            },
            {
                path: '/dashboard/manageHospitals',
                element: <AdminRoute><ManageHospitals></ManageHospitals></AdminRoute>
            },
            {
                path: '/dashboard/post-blog',
                element: <AdminRoute><PostBlog></PostBlog></AdminRoute>
            },
            {
                path: '/dashboard/manageBlogs',
                element: <AdminRoute><ManageBlogs></ManageBlogs></AdminRoute>
            },
            {
                path: '/dashboard/add-campaign',
                element: <AdminRoute><AddCampaign></AddCampaign></AdminRoute>
            },
            {
                path: '/dashboard/manageCampaigns',
                element: <AdminRoute><ManageCampaigns></ManageCampaigns></AdminRoute>
            },
        ]
    }
])

export default router;