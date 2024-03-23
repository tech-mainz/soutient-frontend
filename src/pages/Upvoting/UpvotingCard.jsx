import React from 'react';
import "./Upvoting.css";

const UpvotingCard = () => {
  return (
    <>
    <div className='upvoting__card'>
        <img src='https://ibeto.excelmec.org/ibetologo.png' alt='img'></img>
        <p>Name</p>
        <button className='submit__button'>View Details</button>
    </div>
    </>
  )
}

export default UpvotingCard