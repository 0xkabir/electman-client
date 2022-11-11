import React from 'react';

const ReviewItem = ({reviewItem}) => {
    const {userName, imgURL, review} = reviewItem
    return (
        <div className='flex items-center my-3'>
            <img src={imgURL} alt="" className='w-14 mr-5 rounded-full'/>
            <div>
                <h2 className='text-lg font-medium'>{userName}</h2>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewItem;