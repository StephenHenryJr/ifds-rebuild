"use client";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [viewSidebar, setViewSidebar] = useState(false)
  const [isClicked, setIsClicked] = useState(false);

  const handleSideBar = () => {
    setViewSidebar(!viewSidebar);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StateContext.Provider
      value={{ 
        viewSidebar, setViewSidebar,
        isClicked, setIsClicked,
        handleClick,handleSideBar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
