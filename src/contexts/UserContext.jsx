import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserDetails = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAddress, setAddress] = useState("");
  useEffect(() => {
    if (
      window.localStorage.getItem("userAddress") &&
      window.localStorage.getItem("userAddress") !== null
    ) {
      setIsAuthenticated(true);
      setAddress(window.localStorage.getItem("userAddress"));
    }
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
