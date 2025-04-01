import React, { useEffect, useState } from "react";
import "./index.css";
import { AiFillMessage } from "react-icons/ai";
const ChatExpert = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Check if the user has scrolled to the bottom of the page
    if (window.innerHeight + scrollY + 72 >= document.body.offsetHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="chat-btn-container"
      style={{
        transform: `translateY(${isAtBottom ? "-71px" : "0"})`,
      }}
    >
      <div>
        <button className="chat-btn">
          <AiFillMessage size={20} />
          <span>Chat with an Expert</span>
        </button>
      </div>
    </div>
  );
};

export default ChatExpert;
