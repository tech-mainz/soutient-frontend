import React from "react";
import "./LoanFeedCard.css";
function LoanFeedCard() {
  return (
    <div className="loan__card_body">
      <img src="https://avatars.githubusercontent.com/u/75477017?v=4" alt="" />
      <p>Adithya Ajith</p>
      <p>12th Grade</p>
      <p>To cover educational requirements</p>
      <p><span>Required:</span> 12 MATIC</p>
      <button>View Details</button>
    </div>
  );
}

export default LoanFeedCard;
