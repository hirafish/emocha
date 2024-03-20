import { createContext,useState } from "react";

export const DarkModeContext=createContext({});

export const DarkModeProvider=props=>{
    const {children}=props;

    const [isDarkMode,setIsDarkMode]=useState(false);
    
        return (
            <DarkModeContext.Provider value={{isDarkMode,setIsDarkMode}}>
                {children}
            </DarkModeContext.Provider>
        );
};