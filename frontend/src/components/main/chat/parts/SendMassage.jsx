import UserIcon from "../../globalParts/UserIcon";

// const TranslateFromIconTextToUserIcon=({iconText,iconSize})=>{
//     const preUserIconData=iconText.slice(1,iconText.length-1)
//     const userIconDataList=preUserIconData.split(";");
//     return (
//         <>
//             <UserIcon image={userIconDataList[0]} color={userIconDataList[1]} size={iconSize} />
//         </>
//     )
// }

// const FormatMessage=({message})=>{
//     const unformatMessage=message;
//     const iconTextInMessage=message.match(/@[A-Z][a-z]+;[A-Z][a-z]+;/g);
//     console.log(iconTextInMessage);
    
//     return (
//         <>
//         {iconTextInMessage?<TranslateFromIconTextToUserIcon iconText={iconTextInMessage[0]} iconSize={6} />:<>{message}</>}
//         </>
//     )
// }

const SendMessage=({message})=>{
    // const iconTextInMessage=message.match(/@[A-Z][a-z]+;[A-Z][a-z]+;/g);
    // if(!iconTextInMessage){
    // }else{
    // }

    return (
        <div className="message me mb-4 flex text-right">
            <div className="flex-1 px-2">
                <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                    <span className="flex items-center">
                        {message}
                    </span>
                </div>
                {/* <div className="pr-4"><small className="text-gray-500">15 April</small></div> */}
            </div>
        </div>
    );
};

export default SendMessage;