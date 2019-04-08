import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

class SearchField extends Component {
    render() {
        return (
            <View style={styles.searchSection}>
                
                <TextInput
                    style={styles.input}
                    placeholder="search"
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#fff"
                    selectionColor={'#fff'}
                />
                <View>
                    <Icon style={styles.searchIcon} name="search" size={24} color="#fff" />
                </View>
            </View>
        );
    }
}

const styles = {
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#fff'
        // backgroundColor: '#fff',
        
        // color: '#424242',
    }
}

export {SearchField};