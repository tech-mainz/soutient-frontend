import { Dialog, DialogContent } from "@mui/material";
import React, { useContext, useState } from "react";
import "./ConfirmLoanDeployContract.css";
import { UserContext } from "../../contexts/UserContext";
import { ethers } from "ethers";
import { loanAbi as Abi } from "../../utils/LoanAbi";
import { toast } from "react-toastify";
import {
  loanContractId as contractAddress,
  soutientBackendUrl,
} from "../../utils/urls";
import axios from "axios";
const ConfirmLoanDeployContract = ({ open, handleClose, interest }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [repayDate, setRepayDate] = useState();
  let dateTime = 20;
  const { isAuthenticated, userAddress } = useContext(UserContext);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(contractAddress, Abi, provider);
  console.log("interest: ", interest);
  const acceptLoan = async (e) => {
    e.preventDefault();
    try {
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner(accounts[0]);
      const contractWithSigner = contract.connect(signer);
      const tx = await contractWithSigner.createLoan(
        description,
        userAddress,
        dateTime,
        { gasLimit: 300000 }
      );
      await tx.wait();

      console.log("Success loan created");
      await axios
        .post(`${soutientBackendUrl}/interest-confirmed-and-contract-done/`, {
          student_address: userAddress,
          loan_provider_address: interest?.donator_metamask_id,
          amount: amount,
          description: description,
          created_date: dateTime,
          proposed_date_repayment: repayDate,
        })
        .then((res) => {
          toast.success("Loan created successfully!!");
          handleClose();
          navigate("/");
        });
    } catch (error) {
      console.log("Error creating campaign:", error);
    }
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
        <form>
        <div className="confirm__content">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Amount to be paid"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <input
            type="datetime"
            placeholder="Deadline"
            value={repayDate}
            onChange={(e) => {
              setRepayDate(e.target.value);
            }}
          />
          <button onClick={acceptLoan} className="submit__button">Submit</button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmLoanDeployContract;
