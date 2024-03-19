import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconsCatalogContext } from "../components/providers/IconsCatalogProvider";
import { LanguagesCatalogContext } from "../components/providers/LanguagesCatalogProvider";
import { UserSettingsContext } from "../components/providers/UserSettingsProvider";
import UserIcon from "../components/main/globalParts/UserIcon";
import TranslateIconCatalog from "../components/main/globalParts/TranslateIconCatalog";

const Setup=()=>{
    // アイコンのデザインセットと言語設定セットを取得
    const iconsCatalog=useContext(IconsCatalogContext);
    const languagesCatalog=useContext(LanguagesCatalogContext);
    // --------------------------------------
    // 表示言語設定
    const [language,setLanguage]=useState(languagesCatalog[0]);

    const handleChangeSetupPageLanguage=(event)=>{
        setLanguage(event.target.value);
    };

    // --------------------------------------
    // ユーザ設定を格納するグローバル変数と設定を変更する関数を取得
    const {userSettings,setUserSettings}=useContext(UserSettingsContext);

    // プレビューのための変数
    const [previews,setPreviews]=useState(userSettings);


    // プレビューを更新するハンドラー
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
    const handleChangeName=(event)=>{
        const newName=event.target.value;
        setPreviews(
            {
                ...previews,
                name:newName
            }
        );
    };
    const handleChangeSnsUrl=(event)=>{
        const newSnsUrl=event.target.value;
        setPreviews(
            {
                ...previews,
                snsUrl:newSnsUrl
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
// ---------------------------------------------

    const navigate=useNavigate();

    // Sendボタンをクリックした時の処理
    const handleClickSend=()=>{
        const postData=previews;
        console.log(postData);
        try{
            // ここでsendDataをバックエンドにpostする
            // 実行結果（true / false）をもらう
            const response=true; // 実行結果を格納する変数
            if(response===true){
                setUserSettings(postData);
                alert("設定を更新しました！")
                navigate("/main/home");
            }else{
                alert("現在、設定を更新することができません。")
                console.log("更新できませんでした");
            };
        }catch(error){
            console.log("Fetch Error:",error);
            alert("現在、設定を更新することができません。")
            console.log("更新できませんでした");
        };
    };
    return (
        <div className="main flex-1 flex flex-col min-h-0">
            <header className="sticky top-0 w-full bg-white shadow flex justify-between">
                <h1 className="text-xl xl:text-3xl font-bold mx-8 my-4 xl:my-5">Emocha</h1>
                <div className="my-4 mr-6 xl:mr-10 flex justify-center items-center">
                    <form className="max-w-sm mx-auto">
                        <select value={language} onChange={handleChangeSetupPageLanguage} id="underline_select" className="block py-1 px-1 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            {languagesCatalog.map((language,index)=>{
                                return (
                                    <option key={index} value={language}>{language}</option>
                                )
                            })}
                        </select>
                    </form>
                </div>
            </header>
            <div className="lg:block heading flex-2">
                <h1 className="text-xl py-1 xl:text-3xl xl:text-gray-700 xl:mb-4 border-b-2 border-gray-200 mx-8 mt-8">{language==="English"?"Setup":"ユーザー設定"}</h1>
            </div>
            <div className="flex-1  h-full overflow-auto">
                <div className="mx-10">
                    <div className="container mb-10">
                        <div className="containe my-8 w-full">
                            <div className="md:flex justify-center">
                                <div className="flex flex-col justify-center items-center md:ml-12">
                                    <div className="mb-4 mt-3 w-20 h-20">
                                        <UserIcon image={previews.icon.image} color={previews.icon.color} size={20}/>
                                    </div>
                                </div>
                                <div className="w-full grid gap-6 mb-6 md:grid-cols-2 items-center">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full md:w-3/4">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{language==="English"?"Icon image":"アイコンイメージ"}</label>
                                            <form>
                                                <select value={previews.icon.image} onChange={handleChangeIconImage} id="iconImages" className="text-center bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    {Object.keys(iconsCatalog.image).map((image,index)=>{
                                                        return (
                                                            <option key={index} value={image}>{language==="English"?image:TranslateIconCatalog(image)}</option>
                                                        )
                                                    })}
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-full md:w-3/4">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{language==="English"?"Icon color":"アイコンカラー"}</label>
                                            <form className="w-full">
                                                <select value={previews.icon.color} onChange={handleChangeIconColor} id="iconColors" className="text-center bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    {Object.keys(iconsCatalog.color).map((color,index)=>{
                                                        return (
                                                            <option key={index} value={color}>{language==="English"?color:TranslateIconCatalog(color)}</option>
                                                        )
                                                    })}
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-3/5 md:pl-12 my-8">
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{language==="English"?"User name":"ユーザー名"}</label>
                            <input type="text" id="userName" spellCheck={false} value={previews.name} onChange={handleChangeName} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <div className="md:w-3/5 md:pl-12 my-8">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{language==="English"?"Password":"パスワード"}</label>
                            <input type="password" id="password" spellCheck={false} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <div className="md:w-3/5 md:pl-12 my-8">
                            <label htmlFor="snsUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{language==="English"?"Social account":"SNSアカウント"}</label>
                            <input type="url" id="snsUrl" value={previews.snsUrl} onChange={handleChangeSnsUrl} placeholder={language==="English"?"Link to social profile":"SNSアカウントへのリンクを入力してください"} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        
                        <div className="container md:pl-12 my-8">
                            <div className="md:w-1/5 min-w-40">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{language==="English"?"Language":"言語"}</label>
                                <form className="w-full">
                                    <select value={previews.language} onChange={handleChangeLanguage} id="languages" className="text-center bg-white border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {languagesCatalog.map((language,index)=>{
                                            return (
                                                <option key={index} value={language}>{language}</option>
                                            )
                                        })}
                                    </select>
                                </form>
                            </div>      
                        </div>
                        
                    </div>
                    <div className="md:pl-12 container flex justify-center md:justify-start items-center mx-auto my-6">
                        <button onClick={handleClickSend} type="button" className="inline-flex items-center justify-center w-36 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:shadow-outline focus:outline-none">
                            {language==="English"?"Save":"保存"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};




{/* <NavLink to={"/main/home"} onClick={handleClickSend} className="navLink bg-gray-400 cursor-pointer">
    ホームページに遷移
</NavLink> */}

export default Setup;