import React, { useContext, useState } from "react";
import "./EducationLoanDialog.css";
import { Dialog, DialogContent } from "@mui/material";
import { soutientBackendUrl } from "../../utils/urls";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
const EducationLoanDialog = ({ application, open, handleClose }) => {
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  let currDate = new Date();
  const { isAuthenticated, userAddress } = useContext(UserContext);
  const handleInterest = (e) => {
    e.preventDefault();
    axios
      .post(`${soutientBackendUrl}/loan-interest/`, {
        donator_metamask_id: userAddress,
        needy_name: application?.requester_name,
        needy_metamask_id: application?.requester_metamask_id,
        datetime: currDate,
        loan_request_foreign: application?.id,
        message: message,
        contact_email: contact,
      })
      .then((promise) => {
        if (promise.status === 201) {
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
        <div className="interest__container">
        <h2>Would you like to send the interest?</h2>
        <form onSubmit={handleInterest}>
          <div className="interest__content">
          <input
            type="text"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <input
            type="email"
            name=""
            placeholder="Email"
            id=""
            require
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <div className="button__container">
          <button type="submit" className="submit__button">Submit</button>
          <input type="reset" className="submit__button"/>
          </div>
          </div>
        </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EducationLoanDialog;
