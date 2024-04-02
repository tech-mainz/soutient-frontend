import React from 'react'
import './LoanFeeds.css'
import LoanFeedCard from '../../components/LoanFeedCard/LoanFeedCard'
const LoanFeeds = () => {
  return (
    <div className='loan__feed_pg_main'>
      <h1>Student loans</h1>
      <div className="student__loan_cards_container">
        <LoanFeedCard/>
        <LoanFeedCard/>
        <LoanFeedCard/>
        <LoanFeedCard/>
      </div>
    </div>
  )
}

export default LoanFeeds
