import UserIcon from "../../globalParts/UserIcon";


const UserIconFormatedFromIconText=({iconText,iconSize})=>{
    const preUserIconData=iconText.slice(1,iconText.length-1)
    const userIconDataList=preUserIconData.split(";");
    return (
        <>
            <UserIcon image={userIconDataList[0]} color={userIconDataList[1]} size={iconSize} />
        </>
    )
}

const ReceiveMessage=({receiveData})=>{
    const iconText=receiveData.iconText;
    const preUserIconData=iconText.slice(1,iconText.length-1)
    const userIconDataList=preUserIconData.split(";");
    return(
        <div className="message mb-4 flex">
            <div className="flex-2">
                <div className="w-12 h-12">
                <UserIcon image={userIconDataList[0]} color={userIconDataList[1]} size={12} />
                </div>
            </div>
            <div className="flex-1 px-2 flex justify-start items-center">
                <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span className="flex items-center">
                        {receiveData.message}    
                    </span>
                </div>
                {/* <div className="pl-4"><small className="text-gray-500">15 April</small></div> */}
            </div>
        </div>
    );
};

export default ReceiveMessage;