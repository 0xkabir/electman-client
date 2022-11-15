import { Spinner } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='flex h-[80vh] justify-center items-center'>
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }

    if(!user?.uid){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;