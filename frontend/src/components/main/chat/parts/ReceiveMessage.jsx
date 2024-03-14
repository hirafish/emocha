import UserIcon from "../../globalParts/UserIcon";
import DisplayEmojis from "./DisplayEmojis";
import Tooltip from "../../globalParts/Tooltip";

const ReceiveMessage=({receiveData})=>{
    const iconText=receiveData.iconText;
    const preUserIconData=iconText.slice(1,iconText.length-1)
    const userIconDataList=preUserIconData.split(";");
    return(
        <div className="message mb-4">
            <div className="flex">
                <div className="w-10 h-10">
                    <UserIcon image={userIconDataList[0]} color={userIconDataList[1]} size={10} />
                </div>
                <div className="flex items-center">
                    <p className="text-gray-500 ml-1">obake</p>
                </div>
            </div>
            <div className="relative group">
                <Tooltip />
                <div className="flex-1 px-2">
                    <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700 ml-6">
                        <span className="flex items-center flex-wrap overflow-auto">
                            <DisplayEmojis emojiShortcodesList={receiveData.message} />
                        </span>
                    </div>
                    {/* <div className="pl-4"><small className="text-gray-500">15 April</small></div> */}
                </div>
            </div>
        </div>
    );
};

export default ReceiveMessage;