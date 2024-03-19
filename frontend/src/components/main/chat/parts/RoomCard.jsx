import UserIcon from "../../globalParts/UserIcon";

const RoomCard=({roomData})=>{
    const iconImage=roomData.icon.image;
    const iconColor=roomData.icon.color;
    const roomName=roomData.name;
    return (
        <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
            <div className="flex-2">
                <div className="w-12 h-12">
                    <UserIcon image={iconImage} color={iconColor} size="12" />
                </div>
            </div>
            <div className="flex-1 px-2 flex items-center">
                <div className="truncate w-32"><span className="text-gray-800 text-lg ml-4">{roomName}</span></div>
            </div>
        </div>
    );
};

export default RoomCard;