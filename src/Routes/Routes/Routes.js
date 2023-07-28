import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Dashboard from "../../Pages/DashBoard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BloodRequest from "../../Pages/BloodRequest/BloodRequest/BloodRequest";
import AboutUs from "../../Pages/AboutUs/AboutUs";


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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;