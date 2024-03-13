const ReceiveMessage=()=>{
    return(
        <div className="message mb-4 flex">
            <div className="flex-2">
                <div className="w-12 h-12 relative">
                    <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                </div>
            </div>
            <div className="flex-1 px-2">
                <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span className="flex items-center">👋</span>
                </div>
                <div className="pl-4"><small className="text-gray-500">15 April</small></div>
            </div>
        </div>
    );
};

export default ReceiveMessage;