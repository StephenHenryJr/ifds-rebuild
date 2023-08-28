"use client";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [viewSidebar, setViewSidebar] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

  const handleSideBar = () => {
    setViewSidebar(!viewSidebar);
  };

  const handleDropdown = (linkTitle) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [linkTitle]: !prevState[linkTitle],
    }));
  };

  return (
    <StateContext.Provider
      value={{
        viewSidebar,
        setViewSidebar,
        dropdownStates,
        handleSideBar,
        handleDropdown,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
