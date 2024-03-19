import ChatRoomList from "./chat/ChatRoomList";
import ChatArea from "./chat/ChatArea";
import { useContext } from "react";
import { UserSettingsContext } from "../providers/UserSettingsProvider";

const Chat=()=>{
    const {userSettings}=useContext(UserSettingsContext);

    return (
        <div className="main flex-1 flex flex-col min-h-0">
            <div className="hidden lg:block heading flex-2">
                <h1 className="text-xl xl:text-3xl pt-2 text-gray-700 mb-4 dark:text-white">{userSettings.language==="English"?"Chat":"チャット"}</h1>
            </div>

            <div className="flex-1 flex min-h-0 min-w-0">
                <ChatRoomList />
                <ChatArea />
                
            </div>
        </div>
    )
};

export default Chat;