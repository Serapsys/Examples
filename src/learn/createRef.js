import React from 'react'

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();  
    }
    render() {
      return <div ref={this.myRef} >
          {console.log(this.myRef.current)}
      </div>;  
      }
  }

  export default MyComponent 