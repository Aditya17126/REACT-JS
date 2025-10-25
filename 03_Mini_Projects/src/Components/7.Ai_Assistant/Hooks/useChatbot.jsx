import React, { useState } from "react";
// import axios from "axios"

function useChatbot() {
  const [messages, setMessages] = useState([]);
  //  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const sendMessage = async (message) => {
    
    await delay(1000);

    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);

   try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",        // your chosen model
            messages: [
              {
                role: "user",
                content: message
              }
            ]
          })
        }
      );
      
       const data = await response.json();
       
        if (!response.ok) {
        throw new Error(data.error?.message || "API request failed");
      }


      const botMessage = data.choices[0].message.content;
      setMessages([...newMessages , { text: botMessage , sender :"bot"}])
    } catch (error) {
       console.error("Error fetching AI responses :" , error)
    }
  };
  return {messages , sendMessage}
}

export default useChatbot;
