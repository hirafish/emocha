// MessageList.js
import React, { useEffect, useState } from "react";
import { database } from "../firebase/config";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messageRef = database.ref("messages");
    messageRef.on("value", (snapshot) => {
      const messages = snapshot.val();
      const messageList = [];
      for (let id in messages) {
        messageList.push({ id, ...messages[id] });
      }
      setMessages(messageList);
    });
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <p key={message.id}>{message.text}</p>
      ))}
    </div>
  );
};

export default MessageList;
