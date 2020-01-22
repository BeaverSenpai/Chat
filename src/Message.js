import React from "react";

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      userId: null,
      message: "",
      avatar: "",
      userName: "",
      actualTime: null
    };
  }

  getMessageFromInput = e => {
    this.setState({
      message: e.target.value
    });
  };

  getTime = () => {
    return new Date().getHours() + ":" + new Date().getMinutes();
  };

  sendMessage = () => {
    const message = {
      id: this.props.id,
      userId: this.props.userId,
      message: this.state.message,
      avatar: this.props.avatar,
      userName: this.props.userName,
      actualTime: this.getTime()
    };

    if (this.state.message) {
      this.setState({
        message: "",
        id: this.state.id + 1
      });
      this.props.updateMessages(message);
    }
  };

  render() {
    return (
      <div>
        <div className="ui input focus">
          <input
            onChange={this.getMessageFromInput}
            value={this.state.message}
            type="text"
            placeholder="Your message"
          />
        </div>
        <button onClick={this.sendMessage} className="ui primary button">
          Message
        </button>
      </div>
    );
  }
}
