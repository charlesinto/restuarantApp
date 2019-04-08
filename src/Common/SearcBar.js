import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

import { SearchField } from "./SearchField";

class SearcBar extends Component {
    render() {
        return (
            
            <View style={styles.containerStyle}>
                <View style={styles.backArrow}>
                    <Icon
                        name="chevron-left"
                        size={24}
                        color={'#fff'}

                    />
                </View>
                <View style={styles.SearchBox}>
                    <SearchField />
                </View>
                <View style={styles.backArrow}>
                    <Icon
                        name="th"
                        size={24}
                        color={'#fff'}

                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffa726',
        height:60
    },
    backArrow:{
        width:32,
        height:32,
        color: '#fff',
        margin: 10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    SearchBox:{
        flexGrow:1,
        color:'#ffff'
    }
}


export  {SearcBar};