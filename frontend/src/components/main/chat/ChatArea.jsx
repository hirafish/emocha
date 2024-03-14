import { useState } from "react";
import ReceiveMessage from "./parts/ReceiveMessage";
import SendMessage from "./parts/SendMassage";
import data from '@emoji-mart/data/sets/14/twitter.json'
import Picker from '@emoji-mart/react'
import { init } from "emoji-mart";

const ChatArea=()=>{
    init({ data })

    // チャットでやり取りするデータ例
    const sendData={
        id:"1234",
        message:"👻"
    }

    const receiveData={
        iconText:"@Otter;Pink;",
        message:"🍏☕️"
    }
    // ------------------------

    // 絵文字ピッカーの表示・非表示
    const tailwindNotShowEmojiPicker="hidden";
    const tailwindShowEmojiPicker="absolute bottom-24 opacity-75";

    const [showEmojiPicker,setShowEmojiPicker]=useState(tailwindNotShowEmojiPicker);

    const handleShowEmojiPicker=(event)=>{
        const currentClassNameText=event.currentTarget.className;
        if(currentClassNameText){
            if(currentClassNameText.includes("textarea")){
                setShowEmojiPicker(tailwindShowEmojiPicker);
            }else{
                setShowEmojiPicker(tailwindNotShowEmojiPicker);
            };
        }else{
            try{
                const parentClassNameText=event.target.offsetParent.childNodes[1].childNodes[1].className;
                if(parentClassNameText.includes("textarea")){
                    setShowEmojiPicker(tailwindShowEmojiPicker);
                }else{
                    showEmojiPicker(tailwindNotShowEmojiPicker)
                }
            }catch{
                setShowEmojiPicker(tailwindNotShowEmojiPicker);
            };
        };
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

    return (
        <div className="chat-area flex-1 flex flex-col h-full min-w-0">
            <div className="flex-3">
                <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">Chatting with <b>Mercedes Yemelyan</b></h2>
            </div>
            <div className="messages flex-1 overflow-auto">
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <ReceiveMessage receiveData={receiveData} />
                <SendMessage message={sendData.message} />

                {/* GIF表示 */}
                {/* <div className="message mb-4 flex">
                    <div className="flex-2">
                        <div className="w-12 h-12 relative">
                            <img className="w-12 h-12 rounded-full mx-auto" src="./resources/profile-image.png" alt="chat-user" />
                        </div>
                    </div>
                    <div className="flex-1 px-2">
                        <div className="inline-block rounded-full p-2 px-6">
                            <!-- via GIPHY (https://giphy.com/gifs/cute-spongebob-squarepants-patrick-star-UVk5yzljef0kGiayL1) -->
                            <img src="https://i.giphy.com/DPvq36SD00MihIDc00.webp" className="rounded-lg w-3/5" />
                        </div>
                        <div className="pl-4"><small className="text-gray-500">15 April</small></div>
                    </div>
                </div> */}
                {/* --------- */}
                
            </div>
            <div className="flex-2 pt-4 pb-6 relative">
                <div id="picker" className={showEmojiPicker}>
                    <Picker data={data} locale="en" noCountryFlags={true} set="twitter" onClickOutside={handleShowEmojiPicker} onEmojiSelect={handleAddEmoji} emojiButtonRadius='6px' previewPosition={"none"}
                        emojiButtonColors={[
                        'rgba(155,223,88,.7)',
                        'rgba(149,211,254,.7)',
                        'rgba(247,233,34,.7)',
                        'rgba(238,166,252,.7)',
                        'rgba(255,213,143,.7)',
                        'rgba(211,209,255,.7)',
                        ]} />
                </div>
                <div className="write bg-white shadow flex rounded-lg max-h-20">
                    <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
                        <span className="block text-center text-gray-400 hover:text-gray-800">
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                    </div>
                    <div className="textarea flex-1 min-w-0 max-h-16 cursor-text" onClick={(event)=>{handleShowEmojiPicker(event)}}>
                        {/* contentEditable="plaintext-only" suppressContentEditableWarning="true" */}
                        <div className="textarea w-full h-full outline-none pt-4 pb-5 px-4 bg-transparent flex flex-wrap overflow-auto">
                            {inputEmojis[0]?
                            inputEmojis.map((shortcodes,index)=>{
                                return(
                                    <span key={index} className="mr-1">
                                        <em-emoji shortcodes={shortcodes} set="twitter" size="1.3em" ></em-emoji>
                                    </span>
                                )
                            })
                            :<span className="text-gray-400">Select emojis ...</span>
                            }
                            {/* <span className="CursolSpan h-full text-gray-500 flex items-center">|</span> */}
                        </div>
                        {/* <textarea id="textarea" onClick={handleShowEmojiPicker} name="message" className="w-full block outline-none py-4 px-4 bg-transparent" rows="1" placeholder="Type emojis ..." autoFocus></textarea> */}
                    </div>
                    <div className="flex-2 w-32 p-2 flex content-center items-center relative">
                        <div className="flex-1 text-center">
                            <span onClick={handleDeleteEmoji} className="text-gray-400 hover:text-gray-500">
                                <span className="inline-block align-middle">
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-7">
                                        {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                        <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                                    </svg>
                                </span>
                            </span>
                        </div>
                        <div className="flex-1">
                            <button className="bg-blue-400 w-10 h-10 rounded-full inline-block">
                                <span className="inline-block align-text-bottom">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4 text-white"><path d="M5 13l4 4L19 7"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatArea;