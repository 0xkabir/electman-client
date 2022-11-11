import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
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
            path: '/services', element: <Services/>
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