import React, { Profiler } from "react";

class UncontrolledRef extends React.Component {
  handleSubmitClick = () => {
    const name = this._name.value;
    console.log(this._name.value);
    // do something with `name`
  };

  callback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log(
      id,
      "id", // the "id" prop of the Profiler tree that has just committed
      phase,
      "phase", // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
      actualDuration,
      "ad", // time spent rendering the committed update
      baseDuration,
      "bd", // estimated time to render the entire subtree without memoization
      startTime,
      "st", // when React began rendering this update
      commitTime,
      "ct", // when React committed this update
      interactions,
      "inter" // the Set of interactions belonging to this update
    );
  };

  render() {
    return (
      <Profiler id="diva" onRender={this.callback}>
        <div>
          <input type="text" ref={(input) => (this._name = input)} />
          <button onClick={this.handleSubmitClick}>Sign up</button>
        </div>
      </Profiler>
    );
  }
}

export default UncontrolledRef;
