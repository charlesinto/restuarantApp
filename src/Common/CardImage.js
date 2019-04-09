import React from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"; 

const CardImage = ({url}) => {
    return (
        <View style={styles.containerStyle}>
            <View style={{width:'100%', height:'100%'}}>
                <Image 
                    source={{uri:'https://res.cloudinary.com/dnevwxinm/image/upload/v1554383530/waves/assets/1554383529721.jpg'}}
                    style={{flex:1 , width: null, height: null}}
                    resizeMode={'cover'}

                />
            </View>
            <View style={styles.distanceStyle}>
                <Text style={styles.distanceText}>16Km</Text>
            </View>
            <View style={styles.likeContainerStyle}>
                <Icon 
                    name={"ios-heart-empty"}
                    color={'#fff'}
                    size={24}
                />
            </View>
        </View>
    );
};

const styles = {
    containerStyle:{
        flexGrow: 1,
        display:'flex',
        position:'relative'
    },
    distanceStyle:{
        position:'absolute',
        top:0,
        left: 0,
        
    },
    distanceText:{
        color:'#fff',
        fontSize:16,
        padding:10,
        fontWeight:'500'
    },
    likeContainerStyle:{
        position:'absolute',
        right: 0,
        top: 0,
        padding:10
    }
}

export  {CardImage};