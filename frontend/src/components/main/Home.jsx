import { useContext } from "react";
import { UserSettingsContext } from "../providers/UserSettingsProvider";
import { NavLink } from "react-router-dom";

const Home=()=>{
    const {userSettings}=useContext(UserSettingsContext);
    return(
        <div className="main flex-1 flex flex-col min-h-0 w-11/12 m-auto">
            <div className="lg:block heading flex-2">
                <h1 className="text-xl py-3 xl:text-3xl xl:text-gray-700 xl:mb-4 dark:text-white ">{userSettings.language==="English"?"Home":"ホーム"}</h1>
            </div>
            <div className="flex-1 h-full flex flex-col items-center justify-center">
                <div className="flex justify-center items-center">
                    <span className="flex justify-center">
                        <img src="/emochaLogo.png" className=" w-16 h-16 md:w-24 md:h-24 mr-3 rounded-md my-auto" />
                        <span className="flex justify-center items-center">
                            <h1 translate="no" className="font-extrabold md:text-7xl text-5xl dark:text-white">emocha</h1>
                        </span>
                    </span>
                </div>
                <div className="py-4">
                    <p className="text-lg font-midium text-center text-gray-600 dark:text-gray-200">{userSettings.language==="English"?<span>Even if there are no words,<br/> we can communicate with each other.</span>:<span>言葉がなくても、心が通じる。</span>}</p>
                </div>
                <div className="pt-6">
                    <p className="text-xl font-bold text-center dark:text-white">{userSettings.language==="English"?<span>Hi, {userSettings.name} !</span>:<span>ようこそ {userSettings.name} !</span>}</p>
                </div>
                {userSettings.name=="anonymous user"?
                <div className="py-20 w-full flex md:flex-row items-center justify-between md:justify-evenly">
                    <span className="my-4">
                        <NavLink to={"/main/settings"} type="button" className="text-white font-bold shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {userSettings.language==="English"?"Change settings":"設定を変更する"}
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </NavLink>
                    </span>
                    <span className="my-4">
                        <NavLink to={"/main/chat"} type="button" className="text-white font-bold shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {userSettings.language==="English"?"Start chatting":"チャットを始める"}
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </NavLink>
                    </span>
                </div>
                :<div className="py-20">
                    <span className="my-4">
                        <NavLink to={"/main/chat"} type="button" className="text-white font-bold shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {userSettings.language==="English"?"Start chatting":"チャットを始める"}
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </NavLink>
                    </span>
                </div>}
            </div>
        </div>

    )
};

export default Home;