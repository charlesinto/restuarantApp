import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class UserService extends Component {
    renderList(){
        return list.map((item, i) => (
            <View style={{width:'100%', display:'flex', 
                flexDirection:'row',paddingTop:10, 
                paddingBottom:10, borderColor:'#D3D3D3', borderWidth:1,borderBottomWidth: 0}} key={i}>
                <View style={{display:'flex', justifyContent:'center',  paddingLeft: 10, paddingRight: 10}}>
                    <View style={{width:32, height: 32}}>
                        {
                            this.renderRightIcon(item)
                        }
                    </View>
                </View>
                <View style={{display:'flex', flexGrow:1}}>
                    <Text>{item.title}</Text>
                </View>
                <View style={{display:'flex', justifyContent:'center', paddingLeft: 10, paddingRight: 10}}>
                    <View style={{display:'flex',width:32, height:32}}>
                        {
                            this.renderLeftIcon(item)
                        }
                    </View>
                </View>
            </View>
        ))
    }
    renderLeftIcon(item){
        return (
            <Icon 
                name={item.leftIcon}
                size={32}
            />
        )
    }
    renderRightIcon(item){
        switch(item.title){
            case 'Book a table with opentable':
                return (
                    <Image
                        style={{flex:1 , width: null, height: null}}
                        resizeMode={'cover'}
                        source={require('../../asset/opentable.png')}
                    />
                )
            case 'Request a ride with uber':
                return (
                    <Image
                        style={{flex:1 , width: null, height: null}}
                        resizeMode={'cover'}
                        source={require('../../asset/Uber.png')}
                    />
                )
            default:
                return (
                    <Icon 
                        name={item.name}
                        size={32}
                    />
                )
        }
    }
    render() {
        return (
            <View style={styles.contentContainerStyle}>
                {this.renderList()}
            </View>
        );
    }
}

const list = [
    {
        title:'Book a table with opentable',
        leftIcon:'ios-arrow-forward',
        showIcon:false
    },
    {
        title:'Request a ride with uber',
        leftIcon:'ios-arrow-forward',
        showIcon:false
    },
    {
        title:'open',
        showIcon: true,
        name:'ios-time',
        leftIcon:'ios-arrow-down'
    },
    {
        title:'Menu',
        showIcon: true,
        name:'ios-book',
        leftIcon:'ios-link'
    }
]

const styles = {
    contentContainerStyle:{
        width:'100%',
        display:'flex',
        paddingBottom: 10,
        backgroundColor:'#fff',
        borderColor:'#D3D3D3',
        borderBottomWidth:1,
        borderTopWidth: 0
    }
}

export default UserService;