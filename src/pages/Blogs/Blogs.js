import React from 'react';
import useTitle from '../../hooks/useTitle'

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
             <h1 className='text-5xl font-medium text-center'>This is Blogs Page</h1>
        </div>
    );
};

export default Blogs;