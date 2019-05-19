import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Application/Reducers";
import SetAuthToken from "./Application/Actions/SetAuthToken";
import routes from "./Components/Navigation/routes";
import "./index.css";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    //window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.getItem("user")) {
  let user = JSON.parse(localStorage.getItem("user"));
  SetAuthToken(user.token);
  store.dispatch({
    type: "SET_LOGEDIN_USER",
    user: user
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("root")
);
