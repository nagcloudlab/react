import React, { Component } from "react";

import { connect } from "./hof/react-store";

// Presentational Component => how things look
class ChannelList extends Component {
  handleChannelSelect(e, channel) {
    this.props.onSelect(channel);
  }
  renderChannels() {
    let { channels } = this.props;
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

function mapStateToProps(state) {
  return {
    channels: state.channels,
  };
}

const ChannelListContainer = connect(ChannelList, mapStateToProps);
export default ChannelListContainer;
