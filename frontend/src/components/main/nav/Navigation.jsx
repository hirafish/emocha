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
        <div className={"xl:block sm:flex-2 w-64 h-full bg-gray-100 shadow dark:bg-gray-800 "+navTailwind}>
            <div className="p-4 flex justify-end">
                <span onClick={()=>{handleOpenCloseNav()}} className="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                    <span className="h-6 w-6 p-1 rounded-md hover:bg-gray-400 dark:hover:bg-gray-700 flex justify-center items-center">
                        {/* <img src="/navIcon/close.svg" className="dark:text-white" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-5 w-5 dark:text-white">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
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

            <div className="menu">
                <LinkButton svgIcon={"/navIcon/home.svg"} pageName={userSettings.language==="English"?"Home":"ホーム"} to={"/main/home"} />
                <LinkButton svgIcon={"/navIcon/chat.svg"} pageName={userSettings.language==="English"?"Chat":"チャット"} to={"/main/chat"} />
                <LinkButton svgIcon={"/navIcon/slangs.svg"} pageName={userSettings.language==="English"?"My slangs":"スラング一覧"} to={"/main/slangs"} />
                <LinkButton svgIcon={"/navIcon/settings.svg"} pageName={userSettings.language==="English"?"Settings":"設定"} to={"/main/settings"} />
            </div>
        </div>
    )
};

export default Navigation;