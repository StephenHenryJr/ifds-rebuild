"use client";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [viewSidebar, setViewSidebar] = useState(false)
  const [viewDropdown, setViewDropdown] = useState(false);

  const handleSideBar = () => {
    setViewSidebar(!viewSidebar);
  };

  const handleDropdown = () => {
    setViewDropdown(!viewDropdown);
  };

  return (
    <StateContext.Provider
      value={{ 
        viewSidebar, setViewSidebar,
        handleSideBar,
        viewDropdown, setViewDropdown,
        handleDropdown,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
