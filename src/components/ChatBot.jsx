import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import Lottie from 'lottie-react';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'I’ll get back to you soon!' }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Avatar button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-pink-600 hover:bg-blue-700 p-4 rounded-full shadow-lg text-white text-xl"
          >
        
          <FaRobot />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="w-80 h-96 bg-gray-900 text-gray-100 rounded-lg shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
            <h3 className="font-bold font-monoFont">Chat with Me</h3>
            <FaTimes
              className="cursor-pointer hover:text-red-400"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 font-monoFont">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 text-sm rounded-md max-w-[75%]  ${
                  msg.from === 'bot'
                    ? 'bg-gray-700 text-gray-100 self-start'
                    : 'bg-blue-600 text-white self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="p-2 border-t border-gray-700 flex bg-gray-800 font-monoFont">
            <input
              type="text"
              className="flex-1 bg-gray-700 text-white px-3 py-2 text-sm rounded-l-md placeholder-gray-400 outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
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
  );
};

export default ChatBot;
