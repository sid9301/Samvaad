import React from "react";
import "./HomePage.css";
import ChatHeader from "./ChatHeader";
import ChatSidebar from "./ChatSidebar";
import MessageInput from "../MessageBody/MessageInput";
import MessageList from "../MessageBody/MessageList";

// ...existing code...

// Message list component




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
