import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Services from "../pages/Services/Services";
import Login from "../pages/Login/Login";
import Register from '../pages/Register/Register'
import MyReviews from "../pages/MyReviews/MyReviews";
import AddService from "../pages/AddService/AddService";
import UpdateReview from "../pages/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {
            path: '/', element: <Home/>
        },
        {
            path: '/home', element: <Home/>
        },
        {
            path: '/services', element: <Services/>, loader: ()=>fetch('https://electman-server.vercel.app/services')
        },
        {
            path: '/services/:id', element: <Service/>, loader: ({params})=>fetch(`https://electman-server.vercel.app/services/${params.id}`)
        },
        {
            path: '/my-reviews', element: <PrivateRoute><MyReviews/></PrivateRoute>
        },
        {
            path: '/update-review/:id', element: <PrivateRoute><UpdateReview/></PrivateRoute>, loader: ({params})=>fetch(`http://localhost:5000/review/${params.id}`)
        },
        {
            path: '/add-service', element: <PrivateRoute><AddService/></PrivateRoute>
        },
        {
            path: '/blogs', element:<Blogs/>
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/register', element: <Register></Register>
        }
        
    ]}
])

export default routes