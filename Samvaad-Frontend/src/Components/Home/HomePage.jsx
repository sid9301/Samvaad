import React from "react";
import "./HomePage.css";
import ChatHeader from "./ChatHeader";
import ChatSidebar from "./ChatSidebar";


// ...existing code...

// Message list component
function MessageList() {
  return (
    <section className="message-list">
      <div className="message received">
        <span className="sender">Alice:</span>
        <span className="text">Hi there!</span>
      </div>
      <div className="message sent">
        <span className="sender">You:</span>
        <span className="text">Hello Alice!</span>
      </div>
    </section>
  );
}

// Message input component
function MessageInput() {
  return (
    <form className="message-input">
      <input type="text" placeholder="Type your message..." />
      <button type="submit">Send</button>
    </form>
  );
}

// Main HomePage component
export default function HomePage() {
  return (
    <div className="home-page">
      <ChatHeader />
      <div className="chat-container">
        <ChatSidebar />
        <div className="chat-main">
          <MessageList />
          <MessageInput />
        </div>
      </div>
    </div>
  );
}
