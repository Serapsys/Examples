import React, { Component } from "react";
import UpdatedComponent from "./withCounter"; //Similarly can do in hovered counter

class ClickCounter extends Component {
  render() {
    // const count = this.state.count; //just taking this.state is erroneous
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default UpdatedComponent(ClickCounter);
// export default ClickCounter;
