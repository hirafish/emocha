import ChatRoomList from "./chat/ChatRoomList";
import ChatArea from "./chat/ChatArea";

const Chat=()=>{
    return (
        <div className="main flex-1 flex flex-col min-h-0">
            <div className="hidden lg:block heading flex-2">
                <h1 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-200">Chat</h1>
            </div>

            <div className="flex-1 flex min-h-0 min-w-0">
                <ChatRoomList />
                <ChatArea />
                
            </div>
        </div>
    )
};

export default Chat;