import React, { Component } from "react";
import store from "../store";

export function connect(InputComponent, mapStateToProps) {
  // Container Component ==> How things work

  class Container extends Component {
    constructor(props) {
      super();
      this.state = mapStateToProps(store.getState(), props);
    }

    componentDidMount() {
      this.unsubcribe = store.subscribe(() => {
        this.setState(mapStateToProps(store.getState(), this.props));
      });
    }

    componentDidUpdate(prevProps) {
      if (this.props !== prevProps)
        this.setState(mapStateToProps(store.getState(), this.props));
    }

    componentWillUnmount() {
      this.unsubcribe();
    }

    render() {
      return (
        <>
          <InputComponent {...this.props} {...this.state} />
        </>
      );
    }
  }

  // For dev-tool debugging
  Container.displayName = `Connect(${InputComponent.name})`;

  return Container;
}
