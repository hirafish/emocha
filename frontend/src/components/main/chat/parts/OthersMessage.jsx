import UserIcon from "../../globalParts/UserIcon";
import DisplayEmojis from "./DisplayEmojis";
import { GetSlangsList } from "../../slangs/GetSlangs";
import SlangInfo from "./SlangInfo";
import { useContext } from "react";
import { SenderInfoContext } from "../../../providers/SenderInfoProvider";

const OthersMessage=({chatData})=>{
    // propsのデータ例
    // chatData={
    //     iconText:"@Otter;Pink;",
    //     message:[ ':black_heart:', ':brown_heart:', ':green_heart:', ':white_heart:', ':orange_heart:', ':purple_heart:', ':yellow_heart:', ':hand_with_index_finger_and_thumb_crossed::skin-tone-6:']
    // }

    // iconTextをUseIconコンポーネントのprops型に変換
    const iconText=chatData.user.iconText;
    const preUserIconData=iconText.slice(1,iconText.length-1)
    const userIconDataList=preUserIconData.split(";");
    // ------------------------------

    // スラングの情報
    const slangsList=GetSlangsList(chatData.message);

    // ------------------------------
    // ユーザ情報の開示 
    const {senderInfo,setSenderInfo}=useContext(SenderInfoContext);

    const handleClickUser=()=>{
        setSenderInfo(
            {
                isShow:true,
                data:chatData.user
            }
        );
    };

    return(
        <div className="message mb-4">
            <div className="flex">
                <div onClick={handleClickUser} className="w-10 h-10 cursor-pointer">
                    <UserIcon image={userIconDataList[0]} color={userIconDataList[1]} size={10} />
                </div>
                <div onClick={handleClickUser} className="flex items-center">
                    <p className="text-gray-500 ml-1 cursor-pointer">obake</p>
                </div>
            </div>
            <div className="relative group w-fit">
                {slangsList[0]?<SlangInfo slangsList={slangsList} />:undefined}
                <div className="flex-1 px-2 w-fit">
                    <div className={slangsList[0]?"inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700 ml-6 border-2 border-gray-300 hover:border-white":"inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700 ml-6 border-2 border-gray-300"}>
                        <span className="flex items-center flex-wrap overflow-auto">
                            <DisplayEmojis emojiShortcodesList={chatData.message} />
                        </span>
                    </div>
                    {/* <div className="pl-4"><small className="text-gray-500">15 April</small></div> */}
                </div>
            </div>
        </div>
    );
};

export default OthersMessage;