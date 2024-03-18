import ReceiveMessage from "./parts/ReceiveMessage";
import SendMessage from "./parts/SendMassage";
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/config";
import { ref, onValue } from "firebase/database";

const ChatArea = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(db, "messages");

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      // 先頭のnullを除外し、時系列順にソート
      const loadedMessages = data
        ? data
            .filter((item, index) => index !== 0)
            .sort((a, b) => a.uploadTimeUnix - b.uploadTimeUnix)
        : [];

      setMessages(loadedMessages);
    });
  }, []);

  return (
    <div className="chat-area flex-1 flex flex-col h-full min-w-0">
      <div className="flex-3">
        <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">
          Chatting Room
        </h2>
      </div>
      {messages.map((message, index) => (
        <div className="messages flex-1 overflow-auto pb-10">
          if (message.userID === 1)
          {
            <span key={index}>
              <SendMessage message={message.message} />
            </span>
          }
          else
          {
            <span key={index}>
              <ReceiveMessage message={message.message} />
            </span>
          }
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
