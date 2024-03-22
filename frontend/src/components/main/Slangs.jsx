import { UserSettingsContext } from "../providers/UserSettingsProvider";
import { JapaneseSlangContext } from "../providers/JapaneseSlangProvider";
import { EnglishSlangContext } from "../providers/EnglishSlangProvider";
import DisplayEmojis from "./chat/parts/DisplayEmojis";
import {useContext,useEffect} from "react";
import data from '@emoji-mart/data'
import { init } from 'emoji-mart'

const Slangs=()=>{
    useEffect(()=>{
        init({ data })
    },[]);
    const {userSettings}=useContext(UserSettingsContext);
    const {japaneseSlang}=useContext(JapaneseSlangContext);
    const {EnglishSlang}=useContext(EnglishSlangContext);

    return(
        <div className="h-full overflow-auto">
        <div className="main">
            <div className="lg:block heading flex-2 w-11/12 m-auto">
                <h1 className="text-xl py-3 xl:text-3xl xl:text-gray-700 xl:mb-4 dark:text-white ">{userSettings.language==="English"?"Slangs":"スラング一覧"}</h1>
            </div>
            <div className="md:flex justify-evenly">
                <div className="my-10 mx-auto">
                    <h2 className="text-center text-xl my-10 dark:text-white">Meaning in Japanese</h2>
                    <div className="border rounded-lg">
                        <table className="min-w-full divide-y divide-neutral-200">
                            <thead className="bg-neutral-50">
                                <tr className="text-neutral-500">
                                    <th className="px-5 py-3 text-xs font-medium text-left uppercase">Emogis</th>
                                    <th className="px-5 py-3 text-xs font-medium text-left uppercase">meaning</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200 dark:bg-gray-800">
                                {Object.keys(japaneseSlang.Japanese).map((shortcode,index)=>{
                                    return(
                                    <tr key={index} className="text-neutral-800">
                                        <td className="px-5 py-4 text-sm font-medium flex items-center justify-center">
                                            <em-emoji
                                                shortcodes={shortcode}
                                                set="twitter"
                                                size="1.3em"
                                                ></em-emoji>
                                        </td>
                                        <td className="px-5 py-4 text-sm dark:text-white">{japaneseSlang.Japanese[shortcode]["meaning"]}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="my-10 mx-auto">
                    <h2 className="text-center text-xl my-10 dark:text-white">英語での意味</h2>
                    <div className="border rounded-lg">
                        <table className="min-w-full divide-y divide-neutral-200">
                            <thead className="bg-neutral-50">
                                <tr className="text-neutral-500">
                                    <th className="px-5 py-3 text-xs font-medium text-left uppercase">Emogis</th>
                                    <th className="px-5 py-3 text-xs font-medium text-left uppercase">meaning</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200 dark:bg-gray-800">
                                {Object.keys(EnglishSlang.English).map((shortcode,index)=>{
                                    return(
                                    <tr key={index} className="text-neutral-800">
                                        <td className="px-5 py-4 text-sm font-medium flex items-center justify-center">
                                            <em-emoji
                                                shortcodes={shortcode}
                                                set="twitter"
                                                size="1.3em"
                                                ></em-emoji>
                                        </td>
                                        <td className="px-5 py-4 text-sm dark:text-white">{EnglishSlang.English[shortcode]["meaning"]}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Slangs;