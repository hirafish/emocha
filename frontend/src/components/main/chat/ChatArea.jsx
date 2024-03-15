import ReceiveMessage from "./parts/ReceiveMessage";
import SendMessage from "./parts/SendMassage";
import InputEmojis from "./parts/InputEmojis";

const ChatArea=()=>{    

    // チャットでやり取りするデータ例
    const sendData={
        id:"1234",
        message:[':innocent:', ':upside_down_face:', ':kissing_heart:']
    }

    const receiveData={
        iconText:"@Otter;Pink;",
        message:[ ':black_heart:', ':brown_heart:', ':green_heart:', ':white_heart:', ':orange_heart:', ':purple_heart:', ':yellow_heart:', ':hand_with_index_finger_and_thumb_crossed::skin-tone-6:']
    }
    // ------------------------

    return (
        <div className="chat-area flex-1 flex flex-col h-full min-w-0">
            <div className="flex-3">
                <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">Chatting Room</h2>
            </div>
            <div className="messages flex-1 overflow-auto pb-10">
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <SendMessage message={sendData.message} />

                {/* GIF表示 */}
                {/* <div className="message mb-4 flex">
                    <div className="flex-2">
                        <div className="w-12 h-12 relative">
                            <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                        </div>
                    </div>
                    <div className="flex-1 px-2">
                        <div className="inline-block rounded-full p-2 px-6">
                            <!-- via GIPHY (https://giphy.com/gifs/cute-spongebob-squarepants-patrick-star-UVk5yzljef0kGiayL1) -->
                            <img src="https://i.giphy.com/DPvq36SD00MihIDc00.webp" className="rounded-lg w-3/5" />
                        </div>
                        <div className="pl-4"><small className="text-gray-500">15 April</small></div>
                    </div>
                </div> */}
                {/* --------- */}
                
            </div>
            <InputEmojis />
        </div>
    );
};

export default ChatArea;