import OthersMessage from "./parts/OthersMessage";
import MyMessage from "./parts/MyMessage";

import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import { db } from "../../../firebase/config";
import { ref, onValue, get } from "firebase/database";
import InputEmojis from "./parts/InputEmojis";
import { UserSettingsContext } from "../../providers/UserSettingsProvider";
import SenderInfo from "./parts/SenderInfo";
import { SenderInfoProvider } from "../../providers/SenderInfoProvider";

const ChatArea = () => {
  const [messages, setMessages] = useState([]);

  //   ユーザidを取得

  const { userSettings } = useContext(UserSettingsContext);
  const userId = userSettings.id;

  //   メッセージを取得
  useEffect(() => {
    const messagesRef = ref(db, "messages");

    onValue(messagesRef, async (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setMessages([]);
        return;
      }

      const messagesArray = Object.values(data).sort(
        (a, b) => a.uploadTimeUnix - b.uploadTimeUnix
      );

      const messagesWithUser = await Promise.all(
        messagesArray.map(async (message) => {
          const userRef = ref(db, `Users/${message.userId}`);
          const userSnapshot = await get(userRef);
          let userData = userSnapshot.val();

          if (!userData) {
            userData = {
              id: "0000000000",
              name: "deleted user",
              iconText: "@Ghost;Black;",
              language: "English",
              snsUrl: "",
            };
          }

          return {
            ...message,
            user: userData,
          };
        })
      );

      setMessages(messagesWithUser);
    });
  }, []);

  // ------------------------

  // スクロールバーの初期位置を下に設定
  const scrollBottomRef = useRef(null);

  useLayoutEffect(() => {
    if (scrollBottomRef && scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView();
    }
  }, []);
  // ------------------------

  return (
    <div className="chat-area flex-1 flex flex-col h-full min-w-0 relative">
      <div className="flex-3">
        <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200 dark:text-white">
          {userSettings.language === "English"
            ? "Chatting Room"
            : "チャットルーム"}
        </h2>
      </div>
      <SenderInfoProvider>
        <div className="messages flex-1 overflow-auto pb-10">
          <SenderInfo />
          {messages[0]
            ? messages.map((message, index) => {
                if (message.userId === userId) {
                  return (
                    <span key={index}>
                      <MyMessage message={message.message} />
                    </span>
                  );
                } else {
                  return (
                    <span key={index}>
                      <OthersMessage chatData={message} />
                    </span>
                  );
                }
              })
            : ""}

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
          <div ref={scrollBottomRef} />
        </div>
      </SenderInfoProvider>
      <InputEmojis />
    </div>
  );
};

export default ChatArea;
