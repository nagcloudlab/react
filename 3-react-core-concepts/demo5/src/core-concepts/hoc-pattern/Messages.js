import React, { Component } from "react";

import store from "./store";

// dev-2
class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: store.getState().messages[props.currentChannel] || [],
    };
  }
  componentDidMount() {
    this.unsubcribe = store.subscribe(() => {
      const messages =
        store.getState().messages[this.props.currentChannel] || [];
      this.setState({ messages });
    });
  }
  componentWillUnmount() {
    this.unsubcribe();
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentChannel !== prevProps.currentChannel) {
      this.setState({
        messages: store.getState().messages[this.props.currentChannel] || [],
      });
    }
  }
  renderMessages() {
    let { messages } = this.state;
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

export default Messages;
