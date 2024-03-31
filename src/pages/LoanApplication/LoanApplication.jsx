import React from 'react'
import './LoanApplication.css'
const LoanApplication = () => {
  return (
    <div className="student__loan__form">
      <h1>Loan Application</h1>
      <div className="form_field">
        <label>Requester Name</label>
        <input type="text" name="requestor_name"/>
      </div>
      <div className="form_field">
        <label>Institutional Address</label>
        <input type="address" name="address"/>
      </div>
      <div className="form_field">
        <label>Need</label>
        <input type="text" name="need"/>
      </div>
      <div className="form_field">
        <label>Grade</label>
        <input type="number" name="grade"/>
      </div>
      <div className="form_field">
        <label>Image</label>
        <input type="button" name="File" value="Choose File"/>
      </div>
      <div className="form_field">
        <label>Fund Needed</label>
        <input type="number" name="fund_needed"/>
      </div>
    </div>
  )
}

export default LoanApplication
