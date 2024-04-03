import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserDetails = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAddress, setAddress] = useState("");
  useEffect(() => {
    async function checkMetaMaskLogin() {
      if (window.ethereum && window.ethereum.isMetaMask) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setIsAuthenticated(accounts.length > 0);
          if (accounts.length > 0) {
            setAddress(accounts[0]);
          }
        } catch (error) {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    }

    checkMetaMaskLogin();
  }, []);
  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userAddress,
        setAddress,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserDetails;
