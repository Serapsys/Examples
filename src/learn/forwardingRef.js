import React from 'react'


const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
    {/* {console.log(ref.current)} */} 
  </button>
));

// You can now get a ref directly to the DOM button:
// const ref = React.createRef();
{/* <FancyButton ref={ref}>Click me!</FancyButton>; */}

export default FancyButton
