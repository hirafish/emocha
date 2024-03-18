import LinkButton from "./parts/LinkButton";
import { useContext } from "react";
import { UserSettingsContext } from "../../providers/UserSettingsProvider";
import UserIcon from "../globalParts/UserIcon";

const Navigation=(props)=>{
    // ユーザ設定情報を取得
    const {userSettings}=useContext(UserSettingsContext);

    const currentUserIcon=userSettings.icon.image;
    const currentUserIconColor=userSettings.icon.color;
    // ------------------------

    // ナビゲーションの開閉
    const handleOpenCloseNav=()=>{props.handleOpenCloseNav()};
    const navTailwind=props.navTailwind;

    return (
        <div className={"xl:block sm:flex-2 w-64 bg-gray-200 "+navTailwind}>
            <div className="p-4 flex justify-end">
                <span onClick={()=>{handleOpenCloseNav()}} className="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                    <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                        <img src="/navIcon/close.svg" />
                    </span>
                </span>
            </div>
            <div className="user-profile text-center">
                <div className="flex justify-center items-center">
                    <div className="mt-16 w-32 h-32">
                        <UserIcon image={currentUserIcon} color={currentUserIconColor} size={"32"}/>
                    </div>
                </div>
                <div className="text-gray-800 mt-8 w-4 h-4">
                    {/* {userSettings.id}
                    <span className="inline-block align-text-bottom">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 9l-7 7-7-7"></path></svg>
                    </span> */}
                </div>
            </div>

            <div className="menu mt-16 lg:mt-8">
                <LinkButton svgIcon={"/navIcon/home.svg"} pageName={userSettings.language==="English"?"Home":"ホーム"} to={"/main/home"} />
                <LinkButton svgIcon={"/navIcon/chat.svg"} pageName={userSettings.language==="English"?"Chat":"チャット"} to={"/main/chat"} />
                <LinkButton svgIcon={"/navIcon/slangs.svg"} pageName={userSettings.language==="English"?"My slangs":"スラング一覧"} to={"/main/slangs"} />
                <LinkButton svgIcon={"/navIcon/settings.svg"} pageName={userSettings.language==="English"?"Settings":"設定"} to={"/main/settings"} />
            </div>
        </div>
    )
};

export default Navigation;