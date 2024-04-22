import React, { useContext } from "react";
import "./LoanInterestByUserSection.css";
import UserLoanInterestCard from "../UserLoanInterestCard/UserLoanInterestCard";
import { soutientBackendUrl } from "../../utils/urls";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { useQuery } from "react-query";

const fetchLoanInterests = async () => {
  const response = await axios.get(`${soutientBackendUrl}/loan-interest/`);
  console.log(response);
  return response.data;
};

const LoanInterestByUserSection = () => {
  const { userAddress } = useContext(UserContext);
  const {
    data: interests,
    error,
    isLoading,
  } = useQuery("loaninterestfetchdata", fetchLoanInterests);

  if (isLoading) return <div>Fetching Loan Interests...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const filteredInterests = interests.filter(
    (interest) => interest.needy_metamask_id === userAddress
  );

  return (
    <div className="loan__interests_feed_user_section">
      {filteredInterests.map((interest, index) => (
        <UserLoanInterestCard interest={interest} key={index} />
      ))}
    </div>
  );
};

export default LoanInterestByUserSection;
