import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./FeedsSection.css";

const FeedsSection = () => {
    const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/campaign/create-campaign');
  };
  const handleClick2 = () => {
    navigate('/campaign/all');
  };

  return (
    <div className='feeds__main_container'>
        <div className='option__text'>
            Choose Your Option
        </div>
        <div className='feeds__sub_container'>
            <div className='feeds__card' onClick={handleClick1}>
                Campaign Creation
            </div>
            <div className='feeds__card' onClick={handleClick2}>
                Campaign Feeds
            </div>
            <div className='feeds__card'>
                Upvoting System
            </div>
            <div className='feeds__card'>
                Student Loan Feeds
            </div>
            <div className='feeds__card'>
                Apply for Student Loan
            </div>
            <div className='feeds__card'>
                Reviews
            </div>
        </div>
    </div>
  )
}

export default FeedsSection