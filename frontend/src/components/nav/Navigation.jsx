import LinkButton from "./LinkButton";
import { useContext } from "react";
import { UserSettingsContext } from "../providers/UserSettingsProvider";
import UserIcon from "../UserIcon";

const Navigation=()=>{
    const {userSettings}=useContext(UserSettingsContext);

    const currentUserIcon=userSettings.icon.image;
    const currentUserIconColor=userSettings.icon.color;

    return (
        <div className="hidden xl:block sm:flex-2 w-64 bg-gray-200">
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

                <div className="menu mt-8">
                    <LinkButton svgIcon={"./navIcon/home.svg"} pageName={"Home"} to={"/home"} />
                    <LinkButton svgIcon={"./navIcon/chat.svg"} pageName={"Chat"} to={"/chat"} />
                    <LinkButton svgIcon={"./navIcon/slangs.svg"} pageName={"My slangs"} to={"/slangs"} />
                    <LinkButton svgIcon={"./navIcon/settings.svg"} pageName={"Settings"} to={"/settings"} />
                </div>
            </div>
    )
};

export default Navigation;