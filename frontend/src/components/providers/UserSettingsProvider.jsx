import { createContext,useState } from "react";

export const UserSettingsContext=createContext({});

export const UserSettingsProvider=props=>{
    const {children}=props;

    // ユーザ設定の初期値と設定を変更する関数を定義
    const [userSettings,setUserSettings]=useState(
        {
            icon:{image:"Ghost",color:"Purple"},
            name:"りんごらてオバケ",
            language:"English"
        });
    
        return (
            <UserSettingsContext.Provider value={{userSettings,setUserSettings}}>
                {children}
            </UserSettingsContext.Provider>
        );
};