import React from "react";
import "./LoanFeeds.css";
import LoanFeedCard from "../../components/LoanFeedCard/LoanFeedCard";
import axios from "axios";
import { useQuery } from "react-query";
import { soutientBackendUrl } from "../../utils/urls";

const fetchLoanApplications = async () => {
  const response = await axios.get(
    `${soutientBackendUrl}/loan-request/`
  );
  return response.data;
};


const LoanFeeds = () => {
  const {
    data: loanApplications,
    error,
    isLoading,
  } = useQuery("postsData", fetchLoanApplications);

  if (isLoading) return <div>Fetching applications...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="loan__feed_pg_main">
      <h1>Student loans</h1>
      <div className="student__loan_cards_container">
        {loanApplications.map((application,index)=>{
          return(
            <LoanFeedCard application={application} key={index}/>
          )
        })}
      </div>
    </div>
  );
};

export default LoanFeeds;
