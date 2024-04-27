import React, { useState } from "react";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import axios from "axios";
import { useQuery } from "react-query";
import { soutientBackendUrl } from "../../utils/urls";
import ReviewDialog from "../../components/ReviewDialog/ReviewDialog";
const fetchReviews = async () => {
  const response = await axios.get(`${soutientBackendUrl}/review/`);
  return response.data;
};

const Review = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {
    data: reviewDatas,
    error,
    isLoading,
  } = useQuery("reviewData", fetchReviews);

  if (isLoading) return <div>Fetching applications...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="review__container">
      <ReviewDialog open={open} handleClose={handleClose} />
      <h1>Reviews</h1>
      <button className="submit__button" onClick={handleOpen}>
        Add Review
      </button>
      <div className="review_main_container">
        {reviewDatas.map((review, index) => {
          return <ReviewCard review={review} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Review;
