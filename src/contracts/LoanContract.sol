// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoanContract {
    struct Loan {
        string description;
        address creator;
        address borrower;
        uint256 dateTime;
    }

    Loan[] public loans;

    event LoanCreated(string description, address indexed creator, address indexed borrower, uint256 dateTime);

    function createLoan(string memory _description, address _borrower, uint256 _dateTime) external {
        loans.push(Loan(_description, msg.sender, _borrower, _dateTime));
        emit LoanCreated(_description, msg.sender, _borrower, _dateTime);
    }

    function getLoanCount() external view returns (uint256) {
        return loans.length;
    }
}