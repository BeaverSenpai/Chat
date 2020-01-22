import React from "react";

const Chat = props => {
  const chatMessages = props.messages.map(message => (
    <div key={message.id} className="comment">
      <a className="avatar">
        <img alt="" src={message.avatar} />
      </a>
      <div className="content">
        <a className="author">{message.userName}</a>
        <div className="metadata">
          <span className="date">{message.actualTime}</span>
        </div>
        <div className="text">{message.message}</div>
      </div>
    </div>
  ));

  return <div>{chatMessages}</div>;
};

export default Chat;
