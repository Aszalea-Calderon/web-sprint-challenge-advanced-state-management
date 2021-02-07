import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Needed depenencies
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/index";
import thunk from "redux-thunk";
//End Needed Dependinceies

const { worker } = require("./mocks/browser");
worker.start();

//Store//
const store = createStore(reducer, applyMiddleware(thunk));
//End Store//

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//--COMPLETED--//
//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.
