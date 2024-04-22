import React from 'react'
import './UserLoanInterestCard.css'
const UserLoanInterestCard = ({interest}) => {
  return (
    <div className='user__loan_interested_card'>
      <p>{interest?.contact_email}</p>
      <p>{interest?.message}</p>
    </div>
  )
}

export default UserLoanInterestCard
