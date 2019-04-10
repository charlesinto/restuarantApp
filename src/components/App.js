import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducers from "../Reducers";
import Router from "../Routes";
import { StatusBar, View} from 'react-native';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleWare, ReduxThunk)(createStore)

class App extends Component {
    componentDidMount(){
        StatusBar.setBarStyle( 'light-content',true);
        StatusBar.setBackgroundColor("#c77800");
    }
    render() {
        return (
            <Provider store={createStoreWithMiddleWare(Reducers)} >
                <View style={{display:'flex', flex:1}}>
                    <Router />
                </View>
            </Provider>
        );
    }
}

export default App;