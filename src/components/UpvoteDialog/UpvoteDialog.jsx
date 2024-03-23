import React from "react";
import "./UpvoteDialog.css";
import { Dialog, DialogContent } from "@mui/material";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const UpvoteDialog = ({ open, handleClose, campaign }) => {
  const inputFormat = "YYYY-MM-DDTHH:mm:ssZ";
  const outputFormat = "DD MMM YYYY";
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
        <div className="dialog__container">
          <h2>{campaign?.name}</h2>
          <img src={campaign?.image} alt=""></img>
          <p>{campaign?.description}</p>
          <div className="details__row">
            <div className="details_box">
              <h5>Location</h5>
              <p>{campaign?.location}</p>
            </div>
            <div className="details_box">
              <h5>Start Date</h5>
              <p>
                {dayjs(campaign?.start_date, {
                  format: inputFormat,
                }).format(outputFormat)}
              </p>
            </div>
            <div className="details_box">
              <h5>End Date</h5>
              <p>
                {dayjs(campaign?.end_date, {
                  format: inputFormat,
                }).format(outputFormat)}
              </p>
            </div>
            <div className="details_box">
              <h5>Number of Votes</h5>
              <p>{campaign?.no_of_votes}</p>
            </div>
          </div>
          <button className="submit__button">Upvote</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpvoteDialog;
