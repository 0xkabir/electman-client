import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewItem from "./ReviewItem";

const Service = () => {
  const { user } = useContext(AuthContext);
  const { _id, name, imgurl, price, intro, description } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://electman-server.vercel.app/reviews/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [_id]);
  const addReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    if(review.length !== 0){
      const reviewObj = {
        time: Date.now(),
        userId: user.uid,
        userName: user.displayName,
        imgURL: user.photoURL,
        serviceId: _id,
        serviceName: name,
        review: review,
      };
      console.log(reviewObj);
      fetch("https://electman-server.vercel.app/add-review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewObj),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("review added");
            form.reset();
            const newReviews = [reviewObj, ...reviews];
            setReviews(newReviews);
          }
        });
    }
    else{
      toast.error("Cannot add an empty review")
    }
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="p-5 md:p-10 lg:w-1/2 lg:sticky lg:top-5">
        <img src={imgurl} alt="" className="w-11/12 mx-auto" />
        <div className="w-11/12 mx-auto">
          <h2 className="text-3xl font-medium my-3">{name}</h2>
          <p className="text-lg">{intro}</p>
          <h3 className="text-xl font-medium text-orange-600 my-3">
            Price: ${price}
          </h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="px-5 md:px-10 w-11/12 mx-auto my-10">
          <h2 className="text-3xl font-medium my-5">Client Reviews</h2>
          {user?.uid ? (
            <form onSubmit={addReview}>
              <textarea
                name="review"
                className="w-full border-orange-600 focus:border-orange-600 block mb-5"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-1 border rounded font-medium border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Add Review
              </button>
            </form>
          ) : (
            <h2 className="text-xl font-medium">
              Please{" "}
              <Link to="/login" className="text-orange-600">
                Login
              </Link>{" "}
              to add review
            </h2>
          )}
          {reviews.map((reviewItem) => (
            <ReviewItem key={reviewItem._id} reviewItem={reviewItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
