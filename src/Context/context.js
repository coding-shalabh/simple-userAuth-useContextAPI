// context.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const useAuth = ()=> {
    return useContext(AppContext);
}

const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({});

  const value = {auth, setAuth, userData,setUserData};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export {AppContext, AppProvider, useAuth};
