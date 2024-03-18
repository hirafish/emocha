import { SenderInfoContext } from "../../../providers/SenderInfoProvider";
import UserIcon from "../../globalParts/UserIcon";
import { useContext } from "react";
import TranslateUserIconProps from "./TranslateUserIconProps";

const SenderInfo=()=>{
    const {senderInfo,setSenderInfo}=useContext(SenderInfoContext);
    const tailwindNotShowSenderInfo="hidden";
    const tailwindShowSenderInfo="absolute z-20 top-0 bottom-8 left-0 right-0 m-auto w-[90vw] h-[60vh] md:h-[40vh] xl:h-[60vh] md:w-96 min-h-[240px] bg-white rounded-lg bg-opacity-85 shadow flex flex-col";

    const handleClickClose=()=>{
        setSenderInfo(
            {
                isShow:false,
                data:{
                    id:"",name:"",iconText:"",snsUrl:"",language:""
                }
            }
        );
    };
    return (
        <div className={senderInfo.isShow?tailwindShowSenderInfo:tailwindNotShowSenderInfo}>
            {console.log(senderInfo)}
            <div className="flex items-center justify-end">
                <span className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" onClick={handleClickClose} className="w-4 h-4 cursor-pointer">
                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </span>
            </div>
            <div className="flex-1 px-4 py-2 flex flex-col justify-evenly items-center">
                <div className="flex flex-col justify-center items-center">
                    <span className="w-20 h-20">
                        <UserIcon image={senderInfo.data.iconText?TranslateUserIconProps(senderInfo.data.iconText).image:"Ghost"} color={senderInfo.data.iconText?TranslateUserIconProps(senderInfo.data.iconText).color:"Purple"} size={20} />
                    </span>
                    <span className="pt-2 font-medium text-xl">{senderInfo.data.name}</span>
                </div>
                <div className="pl-5 pr-4 w-full">
                    <div className="flex items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                            </svg>
                        </span>
                        <span className="mx-3">{senderInfo.data.language}</span>
                    </div>
                    {senderInfo.data.snsUrl?
                        <div className="flex items-center pt-2">
                            <a href={senderInfo.data.snsUrl} className=" cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-4 h-4">
                                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
                                </svg>
                            </a>
                            <a href={senderInfo.data.snsUrl} className="w-full mx-3 overflow-auto cursor-pointer">{senderInfo.data.snsUrl}</a>
                        </div>
                    :""}
                </div>
            </div>
        </div>
    );
};

export default SenderInfo;