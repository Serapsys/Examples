import React from 'react'

// function CustomTextInput(props) {
//   console.log("CustomTextInput")
//   return (
//     <div>
//       <input ref={props.inputRef} />    
//     </div>
//   );
// }

// class Parent extends React.Component {
//   render() {
//     console.log("parent");
//     console.log(this.inputElement,this.inputRef)
//     return (
//       <CustomTextInput
//         inputRef={el => this.inputElement = el} />
//     );
//   }
// }

//TCS question
//By default, you may not use the ref attribute on function components because they don’t have instances:
function CustomTextInput(props) {
return<input/>;
}

class Parent extends React.Component {
  render() {

    return (
      <CustomTextInput
        ref={(input) => {this.inputElement = input}} /> // the input can be replaced by any variable here results in no error
    );
  }
}

export default Parent
