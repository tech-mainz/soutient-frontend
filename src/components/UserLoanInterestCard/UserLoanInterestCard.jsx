import React, { useState } from "react";
import "./UserLoanInterestCard.css";
import ConfirmLoanDeployContract from "../ConfirmLoanDeployContract/ConfirmLoanDeployContract";
const UserLoanInterestCard = ({ interest }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="user__loan_interested_card">
      <ConfirmLoanDeployContract
        open={open}
        handleClose={handleClose}
        interest={interest}
      />
      <p className="interest_msg">{interest?.contact_email}</p>
      <p>{interest?.message}</p>
<<<<<<< HEAD
      <button onClick={handleOpen}>Raise Contract</button>
=======
      <button onClick={handleOpen} className="submit__button">Make Payment</button>
>>>>>>> 8a41fe879e988801c54d32892d7c65dd840a9994
    </div>
  );
};

export default UserLoanInterestCard;
