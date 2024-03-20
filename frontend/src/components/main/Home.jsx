import { useContext } from "react";
import { UserSettingsContext } from "../providers/UserSettingsProvider";

const Home=()=>{
    const {userSettings}=useContext(UserSettingsContext);
    return(
        <div className="main flex-1 flex flex-col min-h-0 w-11/12 m-auto">
            <div className="lg:block heading flex-2">
                <h1 className="text-xl py-3 xl:text-3xl xl:text-gray-700 xl:mb-4 dark:text-white ">{userSettings.language==="English"?"Home":"ホーム"}</h1>
            </div>
            <div className="flex-1 h-full flex items-center justify-center">
                <p className="text-5xl text-gray-700 mb-16">coming soon ...</p>
            </div>
        </div>

    )
};

export default Home;