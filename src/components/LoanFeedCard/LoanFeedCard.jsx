import React from "react";
import "./LoanFeedCard.css";
function LoanFeedCard({ application }) {
  return (
    <div className="loan__card_body">
      <img src={application?.image} alt="" />
      <p>{application?.requester_name}</p>
      <p>Grade:{application?.grade}</p>
      <p>{application?.need}</p>
      <p>
        <span>Required:</span> {application?.fund_needed} MATIC
      </p>
      <button>View Details</button>
    </div>
  );
}

export default LoanFeedCard;
