import { useContext } from "react";
import ChatRoomList from "./chat/ChatRoomList";
import ChatArea from "./chat/ChatArea";
import { UserSettingsContext } from "../providers/UserSettingsProvider";

const Chat=()=>{
    const {userSettings}=useContext(UserSettingsContext);

    return (
        <div className="main flex-1 w-11/12 m-auto flex flex-col min-h-0">
            <div className="hidden lg:block heading flex-2">
                <h1 className="text-xl xl:text-3xl pt-3 text-gray-700 mb-1 dark:text-white">{userSettings.language==="English"?"Chat":"チャット"}</h1>
            </div>

            <div className="flex-1 flex min-h-0 min-w-0 pt-3 lg:pt-0">
                <ChatRoomList />
                <ChatArea />
                
            </div>
        </div>
    )
};

export default Chat;