import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/my-reviews?user=${user?.uid}`)
        .then(response => response.json())
        .then(data=>{
            setReviews(data)
        })
    },[user])
    return (
        <div className='w-11/12 md:w-4/5 mx-auto min-h-screen'>
            <h2 className='text-4xl font-medium text-center my-5'>My Reviews</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {reviews.map(serviceReview=><ReviewCard key={serviceReview._id} serviceReview={serviceReview}></ReviewCard>)}
        </div>
        </div>
    );
};

export default MyReviews;