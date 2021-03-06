import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CustomTextInput from "./learn/customTextInput";
import CustomText from "./learn/addRefToDom";
import Parent from "./learn/callBackRefBetweenComponents";
import Logger from "./learn/howToLog";
import MyComponent from "./learn/createRef";

import * as serviceWorker from "./serviceWorker";
import FancyButton from "./learn/forwardingRef";
import Yap from "./learn/ErrorBoundaries";
import NameForm from "./learn/nameForm";
import FileInput from "./learn/fileInput";
import UncontrolledRef from "./learn/uncontrolledComponent";
import NoContext from "./learn/noContext";
import WithContext from "./learn/context";
import CustomHook from "./learn/CustomHook";

import Hooker from "./learn/hooker";
import UseCallbackhook from "./hooks/UseCallbackhook";
const ref = React.createRef();

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* {<CustomTextInput />} */}
    {/* {<Parent/>} */}
    {/* {<Logger/>} */}
    {/* {<MyComponent/>} */}
    {/* {<FancyButton ref={ref}>Click me!{console.log(ref)}</FancyButton>} */}
    {/* <Yap/> */}
    {/* <NameForm/> */}
    {/* <FileInput /> */}
    {/* <UncontrolledRef /> */}
    {/* <NoContext /> */}
    {/* <WithContext /> */}
    {/* <Hooker /> */}
    {/* {<CustomText />} */}
    {<CustomHook />}
    {/* <UseCallbackhook /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
