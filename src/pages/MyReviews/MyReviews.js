import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?user=${user?.uid}`)
        .then(response => response.json())
        .then(data=>{
            setReviews(data)
            console.log(data)
        })
    },[user])
    return (
        <div>
            
        </div>
    );
};

export default MyReviews;