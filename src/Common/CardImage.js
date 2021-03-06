import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"; 

const CardImage = ({image_url, distance, type, handleOnpress}) => {
    return (
        <View style={styles.containerStyle}>
            <View style={{width:'100%', height:'100%'}}>
                <Image 
                    source={{uri:image_url}}
                    style={{flex:1 , width: null, height: null}}
                    resizeMode={'cover'}

                />
            </View>
            <View style={styles.distanceStyle}>
               {

                   type === 'Home' ?  <Text style={styles.distanceText}>{(distance /1000).toFixed(2)} Km</Text>
                   :
                   <TouchableOpacity onPress={() => handleOnpress()}>
                        <View style={styles.distanceText}>
                            <Icon 
                                    name="ios-arrow-back"
                                    size={24}
                                    color={'#fff'}
                            />
                        </View>
                    </TouchableOpacity>
               } 
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
        flex: 4,
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