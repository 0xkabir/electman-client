import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const ReviewCard = ({serviceReview, setShowDeleteModal}) => {
    const {_id, serviceName, rating, review} = serviceReview
    return (
        <div className='p-3 m-3.5 text-center rounded-lg hover:shadow-md'>
            <h2 className='text-2xl font-medium'>{serviceName}</h2>
            <Rating initialValue={rating} size={20} readonly/>
            <p>{review}</p>
            <div className='text-center w-3/4 mx-auto font-medium'>
                <Link to={`/update-review/${_id}`}>
                <button className='border px-4 py-1 my-1 mx-2.5 border-emerald-600 rounded text-emerald-600 hover:text-white hover:bg-emerald-600'>Update</button>
                </Link>
                <button className='border px-4 py-1 my-1 mx-2.5 border-orange-600 rounded text-orange-600 hover:text-white hover:bg-orange-600' onClick={()=>setShowDeleteModal(true)}>Delete</button>
            </div>
        </div>
    );
};

export default ReviewCard;