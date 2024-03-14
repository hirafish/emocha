import RoomCard from "./parts/RoomCard";
import { RoomDataListContext } from "../../providers/RoomDataListProvider";
import { useContext } from "react";

const ChatRoomList=()=>{
    const {roomDataList}=useContext(RoomDataListContext);
    console.log(Object.keys(roomDataList))
    // 今のルーム　border-l-4 border-red-500
    return (
    <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
        <div className="search flex-2 pb-6 px-2">
            <input type="text" className="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200" placeholder="Search" />
        </div>
        <div className="flex-1 h-full overflow-auto px-2">
            <RoomCard iconImage={"Otter"} iconColor={"Pink"} roomName={"For All"} />
            <RoomCard iconImage={"Otter"} iconColor={"Pink"} roomName={"Room 1"} />
        </div>
    </div>
    );
};

export default ChatRoomList;