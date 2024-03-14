import { createContext,useState } from "react";

export const RoomDataContext=createContext({});

export const RoomDataProvider=props=>{
    const {children}=props;

    // ルームの情報を定義（初期値は全員のルームのみ）
    const [roomData,setRoomData]=useState(
        {
            room0:{
                id:"",
                name:"For All",
                icon:{image:"Ghost",color:"Black"}
            }
        });
    
        return (
            <RoomDataContext.Provider value={{roomData,setRoomData}}>
                {children}
            </RoomDataContext.Provider>
        );
};