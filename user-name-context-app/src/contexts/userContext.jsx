import React, { createContext, useState, useContext } from 'react';

const userContext = createContext();

export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState("Pepito");

    return (
        <userContext.Provider value={{ userName, setUserName }}>
            {children}
        </userContext.Provider>
    );
};

export const useUser = () => useContext(userContext);
