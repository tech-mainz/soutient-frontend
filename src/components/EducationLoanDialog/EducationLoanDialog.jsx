import React, { useContext } from "react";
import "./EducationLoanDialog.css";
import { Dialog, DialogContent } from "@mui/material";
import { soutientBackendUrl } from "../../utils/urls";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
const EducationLoanDialog = ({ application, open, handleClose }) => {
  let currDate = new Date();
  const { isAuthenticated, userAddress } = useContext(UserContext);
  const handleInterest = () => {
    axios
      .post(`${soutientBackendUrl}/loan-interest/`, {
        donator_metamask_id: userAddress,
        needy_name: application?.requester_name,
        needy_metamask_id: application?.requester_metamask_id,
        datetime: currDate,
        loan_request_foreign: application?.id,
      })
      .then((promise) => {
        if(promise.status===201){
            toast.success("Interest recorded succesfully");
            handleClose();
        }
        console.log(promise);
      });
  };
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: {
          width: "40%",
          backgroundColor: "#efe8e8",
          borderRadius: 5,
          m: 4,
          minHeight: "50vh",
          overflowY: "hidden",
        },
      }}
      slotProps={{
        backdrop: {
          style: {
            opacity: 0.5,
            background: "linear-gradient(to right, #5f1806, #6d0d42)",
          },
        },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent
        sx={{ "&::-webkit-scrollbar": { display: "none" }, padding: 0 }}
      >
        <h2>Would you like to send the interest?</h2>
        <div className="btn__holder_loan_request">
          <button onClick={handleInterest}>yes</button>
          <button onClick={handleClose}>no</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationLoanDialog;
