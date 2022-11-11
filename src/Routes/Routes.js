import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Services from "../pages/Services/Services";
import Login from "../pages/shared/Login/Login";
import SignUp from "../pages/shared/SignUp/SignUp";

const routes = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {
            path: '/', element: <Home/>
        },
        {
            path: '/home', element: <Home/>
        },
        {
            path: '/services', element: <Services/>, loader: ()=>fetch('http://localhost:5000/services')
        },
        {
            path: '/services/:id', element: <Service/>, loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/blogs', element:<Blogs/>
        },
        {
            path: '/login', element: <Login/>
        },
        {
            path: '/signup', element: <SignUp/>
        }
    ]}
])

export default routes