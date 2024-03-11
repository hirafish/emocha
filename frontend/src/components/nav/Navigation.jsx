import LinkButton from "./LinkButton";
import { useContext } from "react";
import { UserSettingsContext } from "../providers/UserSettingsProvider";
import UserIcon from "../UserIcon";

const Navigation=()=>{
    const {userSettings}=useContext(UserSettingsContext);

    const currentUserIcon=userSettings.icon.image;
    const currentUserIconColor=userSettings.icon.color;
    // absolute w-full h-full lg:left-0 lg:w-64 z-20

    return (
        <div className="xl:block sm:flex-2 w-64 bg-gray-200 hidden">
            <div className="p-4 flex justify-end">
                <span className="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                    <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                        <img src="/navIcon/close.svg" />
                    </span>
                </span>
            </div>
            <div className="user-profile text-center">
                <div className="mt-16">
                    <UserIcon image={currentUserIcon} color={currentUserIconColor} size={32}/>
                </div>
                <div className="text-gray-800 mt-8">
                    {userSettings.name}
                    <span className="inline-block align-text-bottom">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                </div>
            </div>

            <div className="menu mt-16 lg:mt-8">
                <LinkButton svgIcon={"/navIcon/home.svg"} pageName={"Home"} to={"/main/home"} />
                <LinkButton svgIcon={"/navIcon/chat.svg"} pageName={"Chat"} to={"/main/chat"} />
                <LinkButton svgIcon={"/navIcon/slangs.svg"} pageName={"My slangs"} to={"/main/slangs"} />
                <LinkButton svgIcon={"/navIcon/settings.svg"} pageName={"Settings"} to={"/main/settings"} />
            </div>
        </div>
    )
};

export default Navigation;