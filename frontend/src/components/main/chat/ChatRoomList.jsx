const ChatRoomList=()=>{
    return (
    <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
        <div className="search flex-2 pb-6 px-2">
            <input type="text" className="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200" placeholder="Search" />
        </div>
        <div className="flex-1 h-full overflow-auto px-2">
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
            <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div className="flex-2">
                    <div className="w-12 h-12 relative">
                        <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                    </div>
                </div>
                <div className="flex-1 px-2">
                    <div className="truncate w-32"><span className="text-gray-800">Karp Bonolo</span></div>
                    <div><small className="text-gray-600 flex items-center">❣️❣️</small></div>
                </div>
                <div className="flex-2 text-right">
                    <div><small className="text-gray-500">15 April</small></div>
                </div>
            </div>
            <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4 border-red-500">
                <div className="flex-2">
                    <div className="w-12 h-12 relative">
                        <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                    </div>
                </div>
                <div className="flex-1 px-2">
                    <div className="truncate w-32"><span className="text-gray-800">Mercedes Yemelyan</span></div>
                    <div><small className="text-gray-600 flex items-center">❣️❣️</small></div>
                </div>
                <div className="flex-2 text-right">
                    <div><small className="text-gray-500">15 April</small></div>
                </div>
            </div>
            <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div className="flex-2">
                    <div className="w-12 h-12 relative">
                        <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                    </div>
                </div>
                <div className="flex-1 px-2">
                    <div className="truncate w-32"><span className="text-gray-800">Cadi Kajetán</span></div>
                    <div><small className="text-gray-600 flex items-center">❣️❣️</small></div>
                </div>
                <div className="flex-2 text-right">
                    <div><small className="text-gray-500">15 April</small></div>
                </div>
            </div>
            <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div className="flex-2">
                    <div className="w-12 h-12 relative">
                        <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                    </div>
                </div>
                <div className="flex-1 px-2">
                    <div className="truncate w-32"><span className="text-gray-800">Rina Samuel</span></div>
                    <div><small className="text-gray-600 flex items-center">❣️❣️</small></div>
                </div>
                <div className="flex-2 text-right">
                    <div><small className="text-gray-500">15 April</small></div>
                </div>
            </div>
            <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div className="flex-2">
                    <div className="w-12 h-12 relative">
                        <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                    </div>
                </div>
                <div className="flex-1 px-2">
                    <div className="truncate w-32"><span className="text-gray-800">Rina Samuel</span></div>
                    <div><small className="text-gray-600 flex items-center">❣️❣️</small></div>
                </div>
                <div className="flex-2 text-right">
                    <div><small className="text-gray-500">15 April</small></div>
                </div>
            </div>
            <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div className="flex-2">
                    <div className="w-12 h-12 relative">
                        <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                    </div>
                </div>
                <div className="flex-1 px-2">
                    <div className="truncate w-32"><span className="text-gray-800">Rina Samuel</span></div>
                    <div><small className="text-gray-600 flex items-center">❣️❣️</small></div>
                </div>
                <div className="flex-2 text-right">
                    <div><small className="text-gray-500">15 April</small></div>
                </div>
            </div>
            <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                <div className="flex-2">
                    <div className="w-12 h-12 relative">
                        <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                    </div>
                </div>
                <div className="flex-1 px-2">
                    <div className="truncate w-32"><span className="text-gray-800">Rina Samuel</span></div>
                    <div><small className="text-gray-600 flex items-center">❣️❣️</small></div>
                </div>
                <div className="flex-2 text-right">
                    <div><small className="text-gray-500">15 April</small></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ChatRoomList;