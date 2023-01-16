import React from 'react';
import { Rating } from 'react-simple-star-rating';

const ReviewItem = ({reviewItem}) => {
    const {userName, imgURL, rating, review} = reviewItem
    return (
        <div className='flex items-center my-3'>
            <img src={imgURL} alt="" className='w-14 mr-5 rounded-full'/>
            <div>
                <h2 className='text-lg font-medium'>{userName}</h2>
                <Rating initialValue={rating} size={20} readonly/>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewItem;