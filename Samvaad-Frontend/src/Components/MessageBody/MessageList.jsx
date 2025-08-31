
const MessageList = () => {
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

export default MessageList;