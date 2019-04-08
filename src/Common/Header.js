import React, { Component } from 'react';
import { View } from "react-native";
import { SearcBar, TitleBar } from "../Common";

class Header extends Component{
    render(){
        return (
            <View style={{ display: 'flex', width: '100%' }}>
                <SearcBar />
                <TitleBar title={this.props.title} />
            </View>
        )
    }
}

export { Header}