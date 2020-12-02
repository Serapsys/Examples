import React, { Component } from "react";
import UpdatedComponent from "./learn/withCounter";

export class HoverCounter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }
  // incrementCount = () => {
  //   this.setState((landState) => {
  //     return { count: landState.count + 1 };
  //   });
  // };
  // render() {
  //   const count = this.state.count;
  //   return (
  //     <div>
  //       <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
  //     </div>
  //   );
  // }
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Hovered {count}</h2>;
  }
}

export default UpdatedComponent(HoverCounter);
