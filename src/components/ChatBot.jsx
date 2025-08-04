import React, { useState, useEffect } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import Lottie from "lottie-react";
import chatbotAnimation from "../assets/chatbot.json"; // your Lottie JSON

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const [showLottie, setShowLottie] = useState(false);
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hey there! Thanks for stopping by. Feel free to ask me anything you'd like to know!",
    },
  ]);
  const [input, setInput] = useState("");

  // Show Lottie popup after 5 seconds (example)
  useEffect(() => {
    const timer = setTimeout(() => setShowLottie(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  if (open && showWarning) {
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 8000); // hide after 8 seconds

    return () => clearTimeout(timer);
  }
}, [open, showWarning]);


  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true); // start spinner

    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          history: messages.map((m) => ({
            role: m.from === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      const data = await response.json();

      const botMessage = {
        from: "bot",
        text: data.reply[0],
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error communicating with backend:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "⚠️ Sorry, something went wrong.",
        },
      ]);
    }

    setLoading(false); // stop spinner
  };

  const openChat = () => {
    setOpen(true);
    setShowWarning(true);
    setShowLottie(false); // hide Lottie when chat opens
  };

  const closeChat = () => {
    setOpen(false);
    // Optionally show Lottie again after some delay:
    setTimeout(() => setShowLottie(true), 10000);
  };

  return (
    <>
      {/* Lottie popup trigger */}
      {showLottie && !open && (
        <div
          onClick={openChat}
          className="fixed bottom-6 right-6 flex items-center gap-3 cursor-pointer z-50"
          title="Chat with me!"
        >
          {/* Lottie animation */}
          <div className="w-24 h-24 rounded-full bg-white p-2 shadow-lg flex items-center justify-center">
            <Lottie animationData={chatbotAnimation} loop={true} />
          </div>

          {/* Dialogue box with white background */}
          <div className="bg-white text-gray-900 rounded-lg px-4 py-2 shadow-md font-semibold select-none hidden md:block">
            Click here! <br /> To know me faster
          </div>
        </div>
      )}

      {/* Chat interface */}
      <div className="fixed bottom-6 right-6 z-50">
        {!open && !showLottie && (
          <button
            onClick={openChat}
            className="bg-pink-600 hover:bg-blue-700 p-4 rounded-full shadow-lg text-white text-xl"
            title="Open Chat"
          >
            <FaRobot />
          </button>
        )}

        {open && (
          <div className="w-80 h-96 bg-gray-900 text-gray-100 rounded-lg shadow-xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
              <h3 className="font-bold font-monoFont">Ask Questions Here!</h3>
              <FaTimes
                className="cursor-pointer hover:text-red-400"
                onClick={closeChat}
              />
            </div>
            {showWarning && (
              <div className="bg-yellow-400 text-gray-900 text-sm p-2 font-semibold text-center animate-pulse">
                ⏳ The chatbot may take 30–60 seconds to load due to free
                hosting. Thanks for your patience!
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2 ">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 text-sm rounded-md max-w-[75%] ${
                    msg.from === "bot"
                      ? "bg-gray-700 text-gray-100 self-start"
                      : "bg-blue-600 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            {loading && (
              <div className="text-center text-sm text-gray-400 italic animate-pulse">
                 Bot is thinking...
              </div>
            )}

            {/* Input area */}
            <div className="p-2 border-t border-gray-700 flex bg-gray-800 font-monoFont">
              <input
                type="text"
                className="flex-1 bg-gray-700 text-white px-3 py-2 text-sm rounded-l-md placeholder-gray-400 outline-none"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 rounded-r-md"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBot;
