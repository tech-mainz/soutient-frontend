import React, { useState } from 'react';
import "./Upvoting.css";
import UpvoteDialog from '../../components/UpvoteDialog/UpvoteDialog';
const UpvotingCard = () => {
  const[open,setOpen]=useState(false)
  const handleClose=()=>{
    setOpen(false)
  }
  const handleOpen=()=>{
    setOpen(true);
  }
  return (
    <>
    <div className='upvoting__card'>
      <UpvoteDialog open={open} handleClose={handleClose}/>
        <img src='https://ibeto.excelmec.org/ibetologo.png' alt='img'></img>
        <p>Name</p>
        <button className='submit__button' onClick={handleOpen}>View Details</button>
    </div>
    </>
  )
}

export default UpvotingCard