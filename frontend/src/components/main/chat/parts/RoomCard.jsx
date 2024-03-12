const RoomCard=()=>{
    return (
        <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
            <div className="flex-2">
                <div className="w-12 h-12 relative">
                    <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                </div>
            </div>
            <div className="flex-1 px-2">
                <div className="truncate w-32"><span className="text-gray-800">Ryann Remo</span></div>
                <div><small className="text-gray-600 flex items-center">❣️❣️</small></div>
            </div>
            <div className="flex-2 text-right">
                <div><small className="text-gray-500">15 April</small></div>
            </div>
        </div>
    );
};

export default RoomCard;