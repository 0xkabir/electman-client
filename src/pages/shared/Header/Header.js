import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "./logo.png";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut()
    .then(()=>{
        <Navigate to='/'></Navigate>
    })
  }
  return (
    <Navbar fluid={true} rounded={true} className="sticky top-0 shadow-md z-10">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-6" />
          <h3 className="text-2xl font-medium">
            <span className="text-orange-600">Elect</span>Man
          </h3>
        </div>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "font-medium text-orange-600 text-right"
              : "text-right font-medium hover:text-orange-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "font-medium text-orange-600 text-right"
              : "text-right font-medium hover:text-orange-600"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "font-medium text-orange-600 text-right"
              : "text-right font-medium hover:text-orange-600"
          }
        >
          Blogs
        </NavLink>
        {user?.uid ? (
          <Link className="text-orange-600 hover:text-orange-700 text-right font-medium" onClick={handleLogOut}>
            Log Out
          </Link>
        ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-orange-600 text-right"
                    : "text-right selection:font-medium hover:text-orange-600"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-orange-600 text-right"
                    : "text-right font-medium hover:text-orange-600"
                }
              >
                Register
              </NavLink>
            </>
          )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
