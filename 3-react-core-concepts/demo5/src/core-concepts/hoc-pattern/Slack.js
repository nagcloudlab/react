import React, { Component } from "react";
import ChannelList from "./ChannelList";
import Messages from "./Messages";

class Slack extends Component {
  state = {
    currentChannel: "",
  };
  changeCurrentChannel(channel) {
    this.setState({ currentChannel: channel });
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">slack : {this.state.currentChannel}</div>
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <ChannelList
                currentChannel={this.state.currentChannel}
                onSelect={(channel) => this.changeCurrentChannel(channel)}
              />
            </div>
            <div className="col-8">
              <Messages currentChannel={this.state.currentChannel} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slack;
