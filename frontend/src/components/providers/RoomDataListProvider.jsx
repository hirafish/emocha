import { createContext,useState } from "react";

export const RoomDataListContext=createContext({});

export const RoomDataListProvider=props=>{
    const {children}=props;

    // ルームの情報を定義（初期値は全員のルームのみ）
    const [roomDataList,setRoomDataList]=useState(
        [
            {
                id:"",
                name:"Everyone",
                icon:{image:"Ghost",color:"Purple"}
            }
        ]);
    
        return (
            <RoomDataListContext.Provider value={{roomDataList,setRoomDataList}}>
                {children}
            </RoomDataListContext.Provider>
        );
};