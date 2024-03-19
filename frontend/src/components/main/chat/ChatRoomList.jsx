import RoomCard from "./parts/RoomCard";
import { RoomDataListContext } from "../../providers/RoomDataListProvider";
import { useContext } from "react";
import { UserSettingsContext } from "../../providers/UserSettingsProvider";

const ChatRoomList=()=>{
    const {roomDataList}=useContext(RoomDataListContext);
    const {userSettings}=useContext(UserSettingsContext);
    // 今のルーム　border-l-4 border-red-500
    return (
    <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
        <div className="flex-2 pb-6 px-2">
        <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200 dark:text-white">{userSettings.language==="English"?"Channels":"チャンネル"}</h2>
        </div>
        <div className="flex-1 h-full overflow-auto px-2">
            {roomDataList.map((roomData,index)=>{
                return (
                    <span key={index}>
                        <RoomCard roomData={roomData} />
                    </span>
                )
            })}
        </div>
    </div>
    );
};

export default ChatRoomList;