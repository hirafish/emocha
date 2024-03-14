import { createContext } from "react";

export const RoomDataContext=createContext({});

export const LanguagesCatalogProvider=props=>{
    const {children}=props;

    // ルームの情報を定義（初期値は全員のルームのみ）
    const roomData={
        room0:{id:"",name:"For All",icon:{image:"Ghost",color:"Black"}}
    };
    
        return (
            <RoomDataContext.Provider value={roomData}>
                {children}
            </RoomDataContext.Provider>
        );
};