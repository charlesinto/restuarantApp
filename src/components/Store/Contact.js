import React, { Component } from 'react';
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 

class Contact extends Component {
    renderIcons(){
        return icons.map((item, i) => (
            <View key={i}>
                <Icon 
                    name={item.name}
                    size={item.size}
                />
            </View>
        ))
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.renderIcons()}
            </View>
        );
    }
}

const icons = [
    {
        name:'ios-call',
        size: 32
    },
    {
        name:'ios-globe',
        size: 32
    },
    {
        name:'ios-compass',
        size: 32
    },
    {
        name:'ios-chatbubbles',
        size: 32
    }
]

const styles = {
    containerStyle:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding: 10,
        backgroundColor:'#fff',
        borderColor:'#D3D3D3',
        borderWidth:1,
        borderTopWidth:0,
        borrderBottomWidth:0

    }
} 

export default Contact;