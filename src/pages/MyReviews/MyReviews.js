import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";
import useTitle from '../../hooks/useTitle'
import DeleteReview from "./DeleteReview";

const MyReviews = () => {
  useTitle("My Reviews")
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://electman-server.vercel.app/my-reviews?user=${user?.uid}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user]);
  const deleteReview = (_id) => {
    fetch(`https://electman-server.vercel.app/reviews/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("deleted successfully");
          const remaining = reviews.filter((review) => review._id !== _id);
          setReviews(remaining);
          setShowDeleteModal(false)
        }
      });
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const closeDeleteModal = () => {
    setShowDeleteModal(false)
  }

  return (
    <div className="w-11/12 md:w-4/5 mx-auto min-h-screen">
      <h2 className="text-4xl font-medium text-center my-5">My Reviews</h2>
      {reviews.length === 0 ? <div className="h-[65vh] md:h-[75vh] lg:h-[50vh] flex justify-center items-center">
        <h2 className="text-4xl text-center font-medium">No Reviews Added</h2>
      </div>:
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((serviceReview, id) => (
          <>
          <ReviewCard
            key={serviceReview._id}
            serviceReview={serviceReview}
            deleteReview={deleteReview}
            setShowDeleteModal={setShowDeleteModal}
          ></ReviewCard>
      <DeleteReview key={id} reviewId={serviceReview._id} showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} closeDeleteModal={closeDeleteModal} deleteReview={deleteReview}/>
      </>
        ))}
      </div>}
    </div>
  );
};

export default MyReviews;
