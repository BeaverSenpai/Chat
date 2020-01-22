import React from "react";
import "./App.css";
import Chat from "./Chat";
import Message from "./Message";

export default class App extends React.Component {
  state = {
    messages: [],
    id: 1
  };

  updateMessages = message => {
    this.setState({
      messages: [...this.state.messages, message],
      id: this.state.id + 1
    });
  };

  render() {
    return (
      <div className="usersContainer">
        <div>
          <div className="ui comments">
            <h3 className="ui dividing header">Chat with Yuki</h3>
            <Chat messages={this.state.messages} />
          </div>
          <Message
            updateMessages={this.updateMessages}
            id={this.state.id}
            userId={0}
            avatar={
              "https://66.media.tumblr.com/7d58f94dfe4d21081b25dd591811763a/tumblr_oz49kyrkO41t0apbyo3_250.png"
            }
            userName={"Johnny"}
          />
        </div>

        <div>
          <div className="ui comments">
            <h3 className="ui dividing header">Chat with Johnny</h3>
            <Chat messages={this.state.messages} />
          </div>
          <Message
            updateMessages={this.updateMessages}
            id={this.state.id}
            userId={1}
            avatar={
              "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/131304884/original/190ac627bd2074add9e3281828ee8ac7ac725380/make-you-a-random-anime-girl-avatar.jpg"
            }
            userName={"Yuki"}
          />
        </div>
      </div>
    );
  }
}
