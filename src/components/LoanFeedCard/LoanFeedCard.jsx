import React from "react";
import "./LoanFeedCard.css";
function LoanFeedCard({ application }) {
  return (
    <><div className="loan__card_body">
      <img src={application?.image} alt="" />
      <p class="name">{application?.requester_name}</p>
      <p><span class="grade">Grade:</span>{application?.grade}</p>
      <p>{application?.need}</p>
      <p>
        <div>
          <span class="required">Required:</span> {application?.fund_needed} MATIC
        </div>
      </p>
      <div>
          <button class="details-view">View Details</button>
      </div>
    </div></>
    
  );
}

export default LoanFeedCard;
