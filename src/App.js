import React from "react";
import "./App.css";
import HoverCounter from "./HoverCounter";
import ClickCounter from "./learn/ClickCounter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div classname="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}
export default App;
