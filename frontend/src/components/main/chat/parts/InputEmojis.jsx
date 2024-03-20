import { useContext, useEffect, useState } from "react";
import { GetSlangsList } from "../../slangs/GetSlangs";
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data/sets/14/twitter.json';
import i18n_ja from '@emoji-mart/data/i18n/ja.json';
import { init } from "emoji-mart";
import DisplayEmojis from "./DisplayEmojis";
import { UserSettingsContext } from "../../../providers/UserSettingsProvider";

const InputEmojis=()=>{
    useEffect(()=>{
        init({ data,i18n_ja})
    },[]);

    const {userSettings}=useContext(UserSettingsContext);

     // 絵文字ピッカーの表示・非表示
     const tailwindNotShowEmojiPicker="hidden";
     const tailwindShowEmojiPicker="absolute bottom-24 opacity-75";
 
     const [showEmojiPicker,setShowEmojiPicker]=useState(tailwindNotShowEmojiPicker);
 
     const handleShowEmojiPicker=(event)=>{
         const currentClassNameText=event.currentTarget.className;
         try{
         if(currentClassNameText){
             if(currentClassNameText.includes("textarea")){
                 setShowEmojiPicker(tailwindShowEmojiPicker);
             }else{
                 setShowEmojiPicker(tailwindNotShowEmojiPicker);
             };
         }else{
             try{
                 const parentClassNameText=event.target.offsetParent.childNodes[1].className;
                //  console.log(event.target.offsetParent.childNodes[1])
                 if(parentClassNameText.includes("attention")){
                     setShowEmojiPicker(tailwindShowEmojiPicker);
                 }else{
                     showEmojiPicker(tailwindNotShowEmojiPicker)
                 }
             }catch{
                 setShowEmojiPicker(tailwindNotShowEmojiPicker);
             };
         };
        }catch{};
     };
 
     // --------------------------
     // 絵文字の入力

    const [inputEmojis,setInputEmojis]=useState([]);

    const handleAddEmoji=(emojiObj)=>{
        setInputEmojis([...inputEmojis,emojiObj.shortcodes])
    }
    const handleDeleteEmoji=()=>{
        const inputEmojisLength=inputEmojis.length;
        if(inputEmojisLength){
            setInputEmojis(inputEmojis.slice(0,inputEmojisLength-1))
        }
    };
    // ---------------------------
    // スラングの注意を表示 / 非表示
    const tailwindNotShowAttention="hidden";
    const tailwindShowAttention="absolute bottom-24 bg-opacity-75 bg-white w-full shadow rounded-lg";
    const [showAttention,setShowAttention]=useState(tailwindNotShowAttention); 

    // 注意で表示するスラングのリスト
    const [slangsList,setSlangsList]=useState([]);

    // ---------------------------
    // 送信ボタン
    const handleClickCheckButton=()=>{
        try{
            const postdData=inputEmojis;
            if(postdData[0]){
                const slangsList=GetSlangsList(postdData);
                if(slangsList[0]){
                    setSlangsList(slangsList);
                    setShowAttention(tailwindShowAttention);
                }else{
                    console.log(postdData);
                    // バックエンドに送信
                    alert("送信しました！");
                    setInputEmojis([]);
                }
            }else{
                alert("絵文字が空です！");
            };
            
        }catch(error){
            console.log("Send Error:",error);
            alert("現在、メッセージを送信できません。");
        };
    };

    // ----------------------------
    // スラングの注意が表示されたとき

    // Sendボタンを押した時
    const handleClickSend=()=>{
        try{
            const postdData=inputEmojis;
            // バックエンドに送信
            console.log(postdData);
            alert("送信しました！");
            setInputEmojis([]);
        }catch(error){
            console.log("Send Error:",error);
            alert("現在、メッセージを送信できません");
        };
        setShowAttention(tailwindNotShowAttention);
        setSlangsList([]);
    }

    // Fixボタンを押した時
    const handleClickFix=()=>{
        setShowAttention(tailwindNotShowAttention);
        setSlangsList([]);
    }

    return(
        <div className="flex-2 pt-4 pb-6 relative">
            <div id="picker" className={showEmojiPicker}>
                <Picker data={data} locale={userSettings.language==="English"?"en":"ja"}  noCountryFlags={true} set="twitter" onClickOutside={handleShowEmojiPicker} onEmojiSelect={handleAddEmoji} emojiButtonRadius='6px' previewPosition={"none"}
                    emojiButtonColors={[
                    'rgba(155,223,88,.7)',
                    'rgba(149,211,254,.7)',
                    'rgba(247,233,34,.7)',
                    'rgba(238,166,252,.7)',
                    'rgba(255,213,143,.7)',
                    'rgba(211,209,255,.7)',
                    ]} 
                    />
            </div>
            <div className={showAttention?"attention "+showAttention:"hidden"}>
                <div className="w-full p-4 flex flex-col items-center">
                    {slangsList[0]?slangsList.map((slangObj,index)=>{
                        return(
                            <span key={index}>
                                <DisplayEmojis emojiShortcodesList={[slangObj.shortcodes]} /> means " {slangObj.meaning} " in Japanese.
                            </span>
                        )
                    }):""}
                </div>
                <div className="w-full flex justify-center p-4 pt-0">
                    <button onClick={handleClickSend} type="button" className="mx-5 w-20 inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:shadow-outline focus:outline-none">
                        Send
                    </button>
                    <button onClick={handleClickFix} type="button" className="mx-5 w-20 inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 bg-white border rounded-md text-neutral-500 hover:text-neutral-700 border-neutral-200/70 hover:bg-neutral-100 active:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200/60 focus:shadow-outline">
                        Fix
                    </button>
                </div>
            </div>
            <div className="write bg-white shadow flex rounded-lg max-h-20 dark:bg-gray-700">
                <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
                    {/* <span className="block text-center text-gray-400 hover:text-gray-800">
                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </span> */}
                </div>
                <div className="textarea flex-1 min-w-0 max-h-16 cursor-text" onClick={(event)=>{handleShowEmojiPicker(event)}}>
                    <div className="textarea w-full h-full outline-none pt-4 pb-5 px-4 bg-transparent flex flex-wrap overflow-auto">
                        {inputEmojis[0]?
                            <DisplayEmojis emojiShortcodesList={inputEmojis} />
                            :<span className="text-gray-400 dark:text-white">{userSettings.language==="English"?"Select emojis ...":"絵文字を選ぶ ..."}</span>
                        }
                    </div>
                </div>
                <div className="flex-2 w-32 p-2 flex content-center items-center relative">
                    <div className="flex-1 text-center">
                        <span onClick={handleDeleteEmoji} className="text-gray-400 hover:text-gray-500 cursor-pointer dark:text-gray-100 dark:hover:text-gray-300">
                            <span className="inline-block align-middle">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7">
                                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                    <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div className="flex-1">
                        <button onClick={handleClickCheckButton} className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full inline-block">
                            <span className="inline-block align-text-bottom">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4 text-white"><path d="M5 13l4 4L19 7"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputEmojis;