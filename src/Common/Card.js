import React, { Component } from 'react';
import { View, Image, Text } from "react-native";
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { CardImage, StoreDetail } from "../Common";

class Card extends Component {
    render() {
        return (
            <View style={{margin:10 , display:'flex', flexDirection:'column',}}>
                <View style={styles.containerStyle}>
                    <CardImage />
                    <StoreDetail />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle:{
        boxShadow: '0 3 6 rgba(0,0,0,0.16), 0 3 6 rgba(0,0,0,0.23)',
        height: 300,
        width:'100%',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        borderRadius: 4,
        borderColor: '#fff',
        borderBottomWidth: 0,
        shadowColor: 'rgba(0,0,0,0.16)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    }
}

export {Card};