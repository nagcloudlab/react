import React, { Component } from "react";

import { connect } from "./hof/react-store";

// dev-2
class Messages extends Component {
  renderMessages() {
    let { messages } = this.props;
    return messages.map((message) => {
      return (
        <div className="alert alert-info">
          <div>{message}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="card card-body">{this.renderMessages()}</div>;
  }
}

function mapStateToProps(state, props) {
  const { currentChannel } = props;
  return {
    messages: state.messages[currentChannel] || [],
  };
}

export default connect(Messages, mapStateToProps);
