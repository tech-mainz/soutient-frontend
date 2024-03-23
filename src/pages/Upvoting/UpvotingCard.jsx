import React, { useState } from "react";
import "./Upvoting.css";
import UpvoteDialog from "../../components/UpvoteDialog/UpvoteDialog";
import { color } from "@mui/system";

const UpvotingCard = ({ campaign }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="upvoting__card">
        <UpvoteDialog
          open={open}
          handleClose={handleClose}
          campaign={campaign}
        />
        <img src={campaign?.image} alt="img"></img>
        <p>{campaign?.name}</p>
        {campaign?.is_open ? (
          <button className="submit__button" onClick={handleOpen}>
            View Details
          </button>
        ) : (
          <p className="close__text">Upvoting Closed</p>
        )}
      </div>
    </>
  );
};

export default UpvotingCard;
