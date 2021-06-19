import React, { Component } from "react";
import store from "./store";

// dev-1
class ChannelList extends Component {
  constructor(props) {
    super();
    this.state = {
      channels: store.getState().channels,
    };
  }
  componentDidMount() {
    this.unsubcribe = store.subscribe(() => {
      const channels = store.getState().channels;
      this.setState({ channels: channels });
    });
  }
  componentWillUnmount() {
    this.unsubcribe();
  }
  handleChannelSelect(e, channel) {
    this.props.onSelect(channel);
  }
  renderChannels() {
    let { channels } = this.state;
    let { currentChannel } = this.props;
    return channels.map((channel) => {
      let className = `list-group-item ${
        channel === currentChannel ? "bg-danger" : ""
      }`;

      return (
        <li
          onClick={(e) => this.handleChannelSelect(e, channel)}
          style={{ cursor: "pointer" }}
          className={className}
        >
          {channel}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">channels</div>
          <div className="card-body">
            <ul>{this.renderChannels()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelList;
