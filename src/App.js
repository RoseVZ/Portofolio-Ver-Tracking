import React from "react";
import PortfolioLayout from "./components/ProfileLayout.jsx";
import ChatBot from "./components/ChatBot.jsx";

function App() {
  return (
    // <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      
    //   <div className="max-w-screen-xl mx-auto">
        
    //   </div>
    // </div>
    <div className="scroll-smooth">
      <PortfolioLayout />
      <ChatBot />
    </div>
    
  );
}

export default App;
