import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducers from "../Reducers";
import Router from "../Routes";

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleWare, ReduxThunk)(createStore)

class App extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleWare(Reducers)}>
                <Router />
            </Provider>
        );
    }
}

export default App;