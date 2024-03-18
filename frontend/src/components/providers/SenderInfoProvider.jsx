import { createContext,useState } from "react";

export const SenderInfoContext=createContext({});

export const SenderInfoProvider=props=>{
    const {children}=props;

    const [senderInfo,setSenderInfo]=useState(
        {
            isShow:false,
            data:{
                id:"",name:"",iconText:"",snsUrl:"",language:""
            }
        }
    );
    
        return (
            <SenderInfoContext.Provider value={{senderInfo,setSenderInfo}}>
                {children}
            </SenderInfoContext.Provider>
        );
};