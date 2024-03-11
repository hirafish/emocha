import { useContext,useState } from "react";
import { IconsCatalogContext } from "../components/providers/IconsCatalogProvider";
import { LanguagesCatalogContext } from "../components/providers/LanguagesCatalogProvider";
import { UserSettingsContext } from "../components/providers/UserSettingsProvider";
import UserIcon from "../components/UserIcon";

const Settings=()=>{
    const iconsCatalog=useContext(IconsCatalogContext);
    const languagesCatalog=useContext(LanguagesCatalogContext);

    const {userSettings,setUserSettings}=useContext(UserSettingsContext);

    const [previews,setPreviews]=useState(userSettings);

    // プレビューを更新する
    const handleChangeIconImage=(event)=>{
        const newImage=event.target.value;
        setPreviews(
            {
                ...previews,
                icon:{
                    ...previews.icon,
                    image:newImage
                }
            }
        );
    };
    const handleChangeIconColor=(event)=>{
        const newColor=event.target.value;
        setPreviews(
            {
                ...previews,
                icon:{
                    ...previews.icon,
                    color:newColor
                }
            }
        );
    };
    const handleChangeLanguage=(event)=>{
        const newLanguage=event.target.value;
        setPreviews(
            {
                ...previews,
                language:newLanguage
            }
        );
    };

    // Sendボタンをクリックした時の処理
    const handleClickSend=()=>{
        const sendData=previews;
        console.log(sendData);
        // ここでsendDataをバックエンドにpostする
        try{
            // 実行結果（true / false）をもらう
            const response=true; // or false
            if(response===true){
                console.log("更新しました！");
            }else{
                console.log("更新できませんでした");
            };
        }catch(error){
            console.log("Fetch Error:",error);
            console.log("更新できませんでした");
        };
    };

    return (
        <div className="main-body container m-auto w-11/12 h-full flex flex-col min-h-0">
        <div>
            <h1 className="text-3xl text-gray-700 py-1 my-4 border-b-2 border-gray-200">Settings</h1>
        </div>
        <div className="flex-1 container flex flex-col items-center justify-center my-8">
            <h2 className="text-xl py-1 mb-4 border-b-2 border-gray-200">Icon</h2>
            <p className='mb-1'>Preview</p>
            <div className="mb-4">
                <UserIcon image={previews.icon.image} color={previews.icon.color} size={20}/>
            </div>
            <div className="flex justify-evenly w-full max-w-xs mx-auto">
                <form className="w-full">
                    <select value={previews.icon.image} onChange={handleChangeIconImage} id="iconImages" className="text-center bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {Object.keys(iconsCatalog.image).map((image,index)=>{
                            return (
                                <option key={index} value={image}>{image}</option>
                            )
                        })}
                    </select>
                </form>
                <form className="w-full ml-2">
                    <select value={previews.icon.color} onChange={handleChangeIconColor} id="iconColors" className="text-center bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {Object.keys(iconsCatalog.color).map((color,index)=>{
                            return (
                                <option key={index} value={color}>{color}</option>
                            )
                        })}
                    </select>
                </form>
            </div>
                                          
        </div>

        <div className="flex-1 container flex flex-col items-center justify-center my-8 ">
            <h2 className="text-xl py-1 mb-4 border-b-2 border-gray-200">Language</h2>
            <div className="flex justify-evenly w-full max-w-xs mx-auto">
                <form className="w-full">
                    <select value={previews.language} onChange={handleChangeLanguage} id="languages" className="text-center bg-white border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {languagesCatalog.map((language,index)=>{
                            return (
                                <option key={index} value={language}>{language}</option>
                            )
                        })}
                    </select>
                </form>
            </div>      
        </div>
        <div className="flex-1 container flex justify-center items-start max-w-xs mx-auto">
            <button onClick={handleClickSend} type="button" className="inline-flex items-center justify-center w-4/5 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:shadow-outline focus:outline-none">
                Save
            </button>

        </div>
    </div>

    )
};

export default Settings;