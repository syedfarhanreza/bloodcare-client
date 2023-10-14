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