// MessageForm.js
import React, { useState } from "react";
import { database } from "../firebase/config";

const MessageForm = () => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const messageRef = database.ref("messages");
    const newMessage = messageRef.push();
    newMessage
      .set({
        text: message,
        timestamp: Date.now(),
      })
      .then(() => {
        // メッセージ送信に成功したら、入力フィールドをクリアする
        setMessage("");
      })
      .catch((error) => {
        // エラーが発生した場合、ユーザーに通知する
        alert(`An error occurred: ${error.message}`);
        // またはカスタムのエラーハンドリングロジックをここに追加
      });
  };

  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
