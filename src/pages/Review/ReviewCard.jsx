import React from 'react'
import { CgProfile } from "react-icons/cg";

function ReviewCard({ review }) {
  return (
    <div className='review__card_container'>
        <p> 
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. */}
            {review?.description}
        </p> 
        <div className='profile__part'>
            <span className='profile__icon'><CgProfile/></span>
            <div className='name__container'>
                <h4>{review?.reviewer_name}</h4>
                <p>{review?.reviewer_metamask_id}</p>
            </div>
        </div>   
    </div>
  )
}

export default ReviewCard