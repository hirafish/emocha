import OthersMessage from "./parts/OthersMessage";
import MyMessage from "./parts/MyMessage";
import InputEmojis from "./parts/InputEmojis";
import { UserSettingsContext } from "../../providers/UserSettingsProvider";
import { useContext } from "react";
import SenderInfo from "./parts/SenderInfo";
import { SenderInfoProvider } from "../../providers/SenderInfoProvider";

const ChatArea=()=>{    
    // ユーザ設定を格納するグローバル変数と設定を変更する関数を取得
    const {userSettings,setUserSettings}=useContext(UserSettingsContext);
    // 自分のユーザID
    const userId=userSettings.id;

    // チャットのデータリスト例
    const chatDataList=
    [
        {
            user:{id:"1111",name:"obake",iconText:"@Ghost;Pink;",snsUrl:"",language:"English"},
            message:[':innocent:', ':upside_down_face:', ':kissing_heart:']
        },
        {
            user:{id:"2222",name:"obake",iconText:"@Ghost;Blue;",snsUrl:"https://twitter.com/elonmusk",language:"日本語"},
            message:[':black_heart:', ':brown_heart:', ':green_heart:', ':white_heart:', ':orange_heart:', ':purple_heart:', ':yellow_heart:', ':hand_with_index_finger_and_thumb_crossed::skin-tone-6:']
        },
        {
            user:{id:"1111",name:"obake",iconText:"@Ghost;Pink;",snsUrl:"https://twitter.com/elonmusk",language:"English"},
            message:[':black_heart:', ':brown_heart:', ':green_heart:']
        },
        {
            user:{id:"1234",name:"obake",iconText:"@Ghost;Pink;",snsUrl:"https://twitter.com/elonmusk",language:"日本語"},
            message:[':black_heart:', ':brown_heart:', ':green_heart:', ':white_heart:', ':orange_heart:', ':purple_heart:', ':yellow_heart:', ':hand_with_index_finger_and_thumb_crossed::skin-tone-6:']
        },
        {
            user:{id:"1111",name:"obake",iconText:"@Ghost;Pink;",snsUrl:"https://twitter.com/elonmusk",language:"English"},
            message:[':black_heart:', ':brown_heart:', ':green_heart:']
        }
    ];

    // ------------------------

    return (
        <div className="chat-area flex-1 flex flex-col h-full min-w-0 relative">
            <div className="flex-3">
                <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">Chatting Room</h2>
            </div>
            <SenderInfoProvider>
                <div className="messages flex-1 overflow-auto pb-10">
                    <SenderInfo />
                    {chatDataList[0]?
                        chatDataList.map((chatData,index)=>{
                            if(chatData.user.id===userId){
                            return(<span key={index}><MyMessage message={chatData.message} /></span>);
                            }else{
                                return(<span key={index}><OthersMessage chatData={chatData} /></span>)
                            }
                        })
                    :""}

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
            </SenderInfoProvider>
            <InputEmojis />
        </div>
    );
};

export default ChatArea;