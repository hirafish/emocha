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
                <span className="relative z-10 text-xs p-2 px-6 leading-none whitespace-no-wrap bg-gray-50 shadow-md w-full rounded-full dark:shadow-gray-900 dark:bg-gray-700">
                    <span className="w-full flex flex-col justify-center items-center">
                        {slangsList.map((slangObj,index)=>{
                            return(
                                <div className="h-auto items-center  dark:text-white">
                                    <p key={index} className=" mb-1 flex "><DisplayEmojis emojiShortcodesList={[slangObj.shortcodes]} /> {userSettings.language === "English"?"means":"は、英語で"} " {slangObj.meaning} " {userSettings.language === "English"?"in Japanese.":"という意味です"}</p>
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