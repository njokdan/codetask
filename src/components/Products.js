import React from "react";

import Main from "./Main.js";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducers";
// import reducer from "./reducers/reducers.js";
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function Products() {
    return (
        <Provider store={store}>
            <div>
                <h2>Welcome to Product Page</h2>
                <Main/>
            </div>
        </Provider>
    );
  }