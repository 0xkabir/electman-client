import React from 'react';

const ReviewCard = ({serviceReview}) => {
    const {serviceName, review} = serviceReview
    return (
        <div className='p-3 m-3.5 text-center rounded-lg hover:shadow-md'>
            <h2 className='text-2xl font-medium'>{serviceName}</h2>
            <p>{review}</p>
            <div className='text-center w-3/4 mx-auto font-medium'>
                <button className='border px-4 py-1 my-1 mx-2.5 border-emerald-600 rounded text-emerald-600 hover:text-white hover:bg-emerald-600'>Update</button>
                <button className='border px-4 py-1 my-1 mx-2.5 border-orange-600 rounded text-orange-600 hover:text-white hover:bg-orange-600'>Delete</button>
            </div>
        </div>
    );
};

export default ReviewCard;