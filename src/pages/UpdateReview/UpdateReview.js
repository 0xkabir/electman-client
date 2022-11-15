import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const navigate = useNavigate()
    const serviceReview = useLoaderData()
    const handleUpdateReview = event => {
        event.preventDefault()
        const form = event.target;
        const updatedReview = form.review.value
        if(updatedReview.length !== 0){
            fetch(`http://localhost:5000/reviews/${serviceReview._id}`,{
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({updatedReview})
        })
        .then(response =>response.json())
        .then(data => {
            if(data.acknowledged){
                form.reset()
                toast.success('Review Updated Successfully')
                navigate('/my-reviews')
            }
        })
        }
        else{
            toast.error('You cannot add an empty review')
        }
    }
    return (
        <div className='min-h-screen text-center'>
            <h2 className='my-10 text-4xl font-medium text-center'>Update Review For {serviceReview.serviceName}</h2>
        <form onSubmit={handleUpdateReview}>
            <textarea name="review"rows="5" placeholder="Update Your Review" className='w-11/12 md:w-3/4 lg:w-1/2 mx-auto block px-4 py-1 my-3 border-2 border-gray-400 focus:border-orange-600'></textarea>
            <button type='submit' className='border px-4 py-1 my-1 mx-2.5 border-orange-600 rounded text-orange-600 hover:text-white hover:bg-orange-600'>Update Review</button>
        </form>
        </div>
    );
};

export default UpdateReview;