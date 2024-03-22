import DisplayEmojis from "./DisplayEmojis";
import { UserSettingsContext } from "../../../providers/UserSettingsProvider";
import {useContext} from "react";

const SlangInfo=({slangsList})=>{
    const {userSettings}=useContext(UserSettingsContext);
    return(
        <>
            {slangsList[0]?
            <div className="absolute top-[2.8em] flex flex-col hidden group-hover:flex w-[280px] ml-6">
                <div className="w-3 h-3 -mb-2 rotate-45 bg-gray-50 ml-8 dark:bg-gray-700"></div>
                <span className="relative z-10 text-xs p-2 px-6 leading-none whitespace-no-wrap bg-gray-50 shadow-md w-full rounded-2xl dark:shadow-gray-900 dark:bg-gray-700">
                    <p className="text-left text-sm dark:text-white font-semibold">{userSettings.language === "English"?"Meaning in Japanese":"英語での意味"}</p>
                    <span className="w-full flex flex-col justify-center items-center">
                        {slangsList.map((slangObj,index)=>{
                            return(
                                <div className="h-auto items-center  dark:text-white">
                                    <p key={index} className=" mb-1 flex justify-center items-center">
                                        <DisplayEmojis emojiShortcodesList={[slangObj.shortcodes]} />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mx-1 text-gray-800 dark:text-gray-100"><path fill="currentColor" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
                                        <span className="text-sm">{slangObj.meaning}</span>
                                    </p>
                                </div>
                            )
                        })}
                    </span>
                </span>
            </div>
            :""}
        </>
    );
};

export default SlangInfo;