import React from 'react';
import error from './error.png'

const ErrorPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <img src={error} alt="" className='h-96'/>
        </div>
    );
};

export default ErrorPage;