import React, { useState } from "react";
import { LuBot, LuSendHorizontal } from "react-icons/lu";
import useChatbot from "./Hooks/useChatbot";

function ChatComponent() {
  const [input, setInput] = useState("");
  const {messages, sendMessage} = useChatbot();

  const handleSend = () => {
    console.log(input)
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="chatContainer">
      <h2 className="chatHeader ">
        React + OpenAI Chatbot <LuBot size={28} />
      </h2>

      <div className="messagesList">
       
        {messages.map((msg, idx) => {
          <div 
            key={idx}
            className={`message ${
              msg.sender === "user" ? "messageUser" : "messageBot"
            } `}
          > 
          {msg.text}
          </div>;
        })}
      </div>

      <div className="inputArea">
        <input
          type="text"
          className="textInput"
          placeholder="Your Message here"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={handleSend} className="sendButton">
          <LuSendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatComponent;
