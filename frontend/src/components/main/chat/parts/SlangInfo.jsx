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
                            <p key={index} className="h-4 flex items-center dark:text-white"><DisplayEmojis emojiShortcodesList={[slangObj.shortcodes]} /> {userSettings.language === "English"?"means":"は"} " {slangObj.meaning} " {userSettings.language === "English"?"":"という意味です"}</p>
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