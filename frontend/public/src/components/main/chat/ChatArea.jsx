import React, { useState, useEffect } from "react";
import { database } from "../../../firebase/config";

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const messagesRef = database.ref("messages");
    messagesRef.on("value", (snapshot) => {
      const messages = snapshot.val();
      const messagesList = [];
      for (let id in messages) {
        messagesList.push({ id, ...messages[id] });
      }
      setMessages(messagesList);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const messagesRef = database.ref("messages");
    messagesRef.push({
      text: newMessage,
      timestamp: Date.now(),
    });
    setNewMessage("");
  };

  return (
    <div>
      <header>
        <h2>Firebase RealTime Chat</h2>
      </header>
      <div id="chat">
        <ul id="messages">
          {messages.map((message) => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
        <form id="message-form" onSubmit={sendMessage}>
          <input
            id="message-input"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button id="message-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
