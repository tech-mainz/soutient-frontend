import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeedsSection.css";

const FeedsSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="feeds__main_container">
      <div className="option__text">Choose Your Option</div>
      <div className="feeds__sub_container">
        <div
          className="feeds__card"
          onClick={() => handleNavigation("/campaign/create-campaign")}
        >
          Campaign Creation
        </div>
        <div
          className="feeds__card"
          onClick={() => handleNavigation("/campaign/all")}
        >
          Campaign Feeds
        </div>
        <div
          className="feeds__card"
          onClick={() => handleNavigation("/upvote")}
        >
          Upvoting System
        </div>
        <div
          className="feeds__card"
          onClick={() => handleNavigation("/feed/student-loan")}
        >
          Student Loan Feeds
        </div>
        <div
          className="feeds__card"
          onClick={() => handleNavigation("/apply/student-loan")}
        >
          Apply for Student Loan
        </div>
        <div className="feeds__card"
          onClick={() => handleNavigation("/review")}
        >
          Reviews
        </div>
      </div>
    </div>
  );
};

export default FeedsSection;
