import React from 'react'
import "./Review.css"
import ReviewCard from './ReviewCard'
import axios from "axios";
import { useQuery } from "react-query";
import { soutientBackendUrl } from "../../utils/urls";

const fetchReviews = async() => {
  const response = await axios.get(
    `${soutientBackendUrl}/review/`
  );
  return response.data;
};

const Review = () => {
  const {
    data: reviewDatas,
    error,
    isLoading,
  } = useQuery("reviewData", fetchReviews);

  if (isLoading) return <div>Fetching applications...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className='review__container'> 
    <h1>Reviews</h1>
    <button className='submit__button'>Add Review</button>
    <div className='review_main_container'>
    {reviewDatas.map((review,index)=>{
        return(
        <ReviewCard review={review} key={index}/>
        )
      })}
      </div>
    </div>
  )
}

export default Review