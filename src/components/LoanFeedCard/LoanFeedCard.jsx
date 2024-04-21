import React,{useState} from "react";
import "./LoanFeedCard.css";
import EducationLoanDialog from "../EducationLoanDialog/EducationLoanDialog";
function LoanFeedCard({ application }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <> <EducationLoanDialog application={application} open={open} handleClose={handleClose} />
      <div className="loan__card_body">
     
        <img src={application?.image} alt="" />
        <p class="name">{application?.requester_name}</p>
        <p>
          <span class="grade">Grade:</span>
          {application?.grade}
        </p>
        <p>{application?.need}</p>
        <p>
          <div>
            <span class="required">Required:</span> {application?.fund_needed}{" "}
            MATIC
          </div>
        </p>
        <div>
          <button class="details-view" onClick={handleOpen}>View Details</button>
        </div>
      </div>
    </>
  );
}

export default LoanFeedCard;
