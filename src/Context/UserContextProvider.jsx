import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userAge, setUserAge] = useState(null);

  const setUserData = (userData) => {
    if (userData) {
      setUserFirstName(userData.firstName);
      setUserLastName(userData.lastName);
      setUserEmail(userData.email);
      setUserAge(userData.age);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userFirstName,
        userLastName,
        userEmail,
        userAge,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
