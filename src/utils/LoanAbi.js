export const loanAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dateTime",
        type: "uint256",
      },
    ],
    name: "LoanCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "_description", type: "string" },
      { internalType: "address", name: "_borrower", type: "address" },
      { internalType: "uint256", name: "_dateTime", type: "uint256" },
    ],
    name: "createLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLoanCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "loans",
    outputs: [
      { internalType: "string", name: "description", type: "string" },
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "uint256", name: "dateTime", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
