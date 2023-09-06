"use client";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [viewSidebar, setViewSidebar] = useState(false);
  

  const handleSideBar = () => {
    setViewSidebar(!viewSidebar);
  };



  return (
    <StateContext.Provider
      value={{
        viewSidebar,
        setViewSidebar,
        handleSideBar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
