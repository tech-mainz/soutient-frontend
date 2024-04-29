import React, { useContext, useState } from "react";
import "./ReviewDialog.css";
import { UserContext } from "../../contexts/UserContext";
import { Dialog, DialogContent } from "@mui/material";
import axios from "axios";
import { soutientBackendUrl } from "../../utils/urls";
import { toast } from "react-toastify";
const ReviewDialog = ({ open, handleClose }) => {
  const { userAddress } = useContext(UserContext);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const submitReview = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setName("Anonymous");
    }
    try {
      const response = await axios.post(`${soutientBackendUrl}/review/`, {
        reviewer_metamask_id: userAddress,
        reviewer_name: name,
        description: description,
      });
      if (response.status === 201) {
        toast.success("Review Added Successfully!!");
        window.location.reload();
      } else {
        toast.success("Something went wrong");
      }
      handleClose();
    } catch (error) {
      console.log(error);
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
        <form onSubmit={submitReview}>
          <div className="review__content">
          <div className="review__field">
          <label htmlFor="Description">Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          </div>
          <div className="review__field">
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          </div>
          <button type="submit" className="submit__button">Submit</button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
