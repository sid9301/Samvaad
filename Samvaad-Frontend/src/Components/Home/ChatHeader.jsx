import React from "react";
import "./ChatHeader.css";

export default function ChatHeader() {
  return (
    <header className="chat-header">
      <h1>Samvaad Chat</h1>
      <span className="user-status">Online</span>
    </header>
  );
}
