"use client";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false); 
  const [viewSidebar, setViewSidebar] = useState(false)
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setViewSidebar(!viewSidebar);
  };

  const handleSideBar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StateContext.Provider
      value={{ 
        activeMenu,  setActiveMenu, 
        isClicked, setIsClicked,
        handleClick,handleSideBar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
