import React from 'react';
import "./Upvoting.css";
import "./UpvotingCard";
import UpvotingCard from './UpvotingCard';

const Upvoting = () => {
  return (
    <>
    <div className='upvoting_main__container'>
        <div className='upvoting__card_container'>
            <UpvotingCard />
        </div>
    </div>
    </>
  )
}

export default Upvoting