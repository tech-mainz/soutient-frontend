import React from "react";
import "./Backbutton.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Backbutton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="back__btn__holder"
      onClick={() => {
        navigate(-1);
      }}
    >
      <FaArrowLeft style={{ color: "#AA076B" }} size={20} />
    </div>
  );
};

export default Backbutton;
