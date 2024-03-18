// src/firebase/config.js から Firebase の設定をインポート
import firebaseConfig from "./firebase/config";

// Firebase パッケージをインポート
import firebase from "firebase/app";
import "firebase/database";
import React, { useState, useEffect } from "react";

// Firebase の初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ChatApp = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // データベースの参照
  const messagesRef = firebase.database().ref("messages");

  useEffect(() => {
    // 新しいメッセージが追加されたときに呼び出される
    messagesRef.on("child_added", (snapshot) => {
      const newMessage = snapshot.val();
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    messagesRef.child(timestamp).set({
      username,
      message,
    });
    setMessage("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Please Tell Us Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <form onSubmit={sendMessage}>
        <input
          id="message-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li
            key={index}
            className={username === msg.username ? "sent" : "receive"}
          >
            <span>{msg.username}: </span>
            {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatApp;
