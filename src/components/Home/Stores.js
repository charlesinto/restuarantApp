import React, { Component } from 'react';
import { View } from 'react-native';
import { Card } from "../../Common";

class Stores extends Component {
    render() {
        return (
            <View style={{display:'flex', flex: 1, flexDirection:'column'}}>
                <Card />
            </View>
        );
    }
}

export default Stores;