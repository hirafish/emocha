import { useContext } from "react";
import { UserSettingsContext } from "../providers/UserSettingsProvider";

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
                            <h1 className="font-extrabold md:text-7xl text-5xl">emocha</h1>
                        </span>
                    </span>
                </div>
                <div className="py-4">
                    <p className="text-xl font-bold text-center">{userSettings.language==="English"?<span>Even if there are no words,<br/> we can communicate with each other.</span>:<span>言葉がなくても、心が通じる。</span>}</p>
                </div>
                <div>
                    <p className="text-xl font-medium text-center">{userSettings.language==="English"?<span>Hi, {userSettings.name} !</span>:<span>ようこそ {userSettings.name} !</span>}</p>
                </div>
            </div>
        </div>

    )
};

export default Home;