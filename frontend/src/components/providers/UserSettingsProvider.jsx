import { createContext,useState } from "react";

export const UserSettingsContext=createContext({});

export const UserSettingsProvider=props=>{
    const {children}=props;

    const [userSettings,setUserSettings]=useState(
        {
            icon:{icon:"Ghost",color:"Purple"},
            name:"りんごらてオバケ",
            language:"English"
        });
    
        return (
            <UserSettingsContext.Provider value={{userSettings,setUserSettings}}>
                {children}
            </UserSettingsContext.Provider>
        );
};