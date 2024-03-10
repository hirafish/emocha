import LinkButton from "./LinkButton";
import { useContext } from "react";
import { UserSettingsContext } from "../providers/UserSettingsProvider";
import UserIcon from "../UserIcon";

const Navigation=()=>{
    const {userSettings}=useContext(UserSettingsContext);

    const currentUserIcon=userSettings.icon.icon;
    const currentUserIconColor=userSettings.icon.color;

    return (
        <div className="hidden xl:block sm:flex-2 w-64 bg-gray-200">
                <div className="user-profile text-center">
                    <UserIcon icon={currentUserIcon} color={currentUserIconColor} />
                    <div className="text-gray-800 mt-8">
                        {userSettings.name}
                        <span className="inline-block align-text-bottom">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                    </div>
                </div>

                <div className="menu mt-8">
                    <LinkButton svgIcon={"./navIcon/home.svg"} pageName={"Home"} link={"./"} isCurrentPage={true} />
                    <LinkButton svgIcon={"./navIcon/chat.svg"} pageName={"Chat"} link={"./"} isCurrentPage={false} />
                    <LinkButton svgIcon={"./navIcon/slangs.svg"} pageName={"My slangs"} link={"./"} isCurrentPage={false} />
                    <LinkButton svgIcon={"./navIcon/settings.svg"} pageName={"Settings"} link={"./"} isCurrentPage={false} />
                </div>
            </div>
    )
};

export default Navigation;