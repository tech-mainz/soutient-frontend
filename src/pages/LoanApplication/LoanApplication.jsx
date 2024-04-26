import React, { Component } from "react";
import axios from "axios";
import "./LoanApplication.css";
import { soutientBackendUrl } from "../../utils/urls";
import LoanInterestByUserSection from "../../components/LoanInterestByUserSection/LoanInterestByUserSection";
class LoanApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requesterName: "",
      institutionalAddress: "",
      need: "",
      grade: "",
      image: "",
      fundNeeded: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      requesterName,
      institutionalAddress,
      need,
      grade,
      image,
      fundNeeded,
    } = this.state;
    const requesterMetamaskId = window.localStorage.getItem("userAddress");

    try {
      const formData = new FormData();
      formData.append("requester_metamask_id", requesterMetamaskId);
      formData.append("requester_name", requesterName);
      formData.append("institutional_address", institutionalAddress);
      formData.append("need", need);
      formData.append("grade", grade);
      formData.append("image", image);
      formData.append("fund_needed", fundNeeded);

      await axios.post(`${soutientBackendUrl}/loan-request/`, formData);
      this.setState({
        requesterName: "",
        institutionalAddress: "",
        need: "",
        grade: "",
        image: null,
        fundNeeded: null,
      });

      alert("Loan application submitted successfully!");
    } catch (error) {
      console.error("Error submitting loan application:", error);
    }
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { requesterName, institutionalAddress, need, grade, fundNeeded } =
      this.state;

    return (
      <div className="student__loan__main_pg">
        <form className="student__loan__form" onSubmit={this.handleSubmit}>
          <h1>Loan Application</h1>
          <div className="form_field">
            <label>Requester Name</label>
            <input
              type="text"
              name="requesterName"
              value={requesterName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form_field">
            <label>Institutional Address</label>
            <input
              type="text"
              name="institutionalAddress"
              value={institutionalAddress}
              onChange={this.handleChange}
            />
          </div>
          <div className="form_field">
            <label>Need</label>
            <input
              type="text"
              name="need"
              value={need}
              onChange={this.handleChange}
            />
          </div>
          <div className="form_field">
            <label>Grade</label>
            <input
              type="number"
              name="grade"
              value={grade}
              onChange={this.handleChange}
            />
          </div>
          <div className="form_field">
            <label>Image</label>
            <input
              type="file"
              id="user_image"
              name="image"
              accept=".jpg, .jpeg, .png"
              onChange={this.handleImageChange}
            />
          </div>
          <div className="form_field">
            <label>Fund Needed</label>
            <input
              type="number"
              name="fundNeeded"
              value={fundNeeded}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="submit__button">
            Submit
          </button>
        </form>
        <LoanInterestByUserSection/>
      </div>
    );
  }
}

export default LoanApplication;
