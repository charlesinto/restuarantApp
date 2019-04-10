import React, { Component} from 'react';
import { View, StyleSheet } from "react-native";
import MapView from 'react-native-maps';

class Map extends Component{
    
    render(){
        console.log(this.props);
        return(
            <View style={styles.containerStyle}>
                <MapView
                    style={styles.mapView} 
                    region={{
                        latitude: this.props.latitude,
                        longitude: this.props.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        position:'relative',
        top:0,
        bottom:0,
        right: 0,
        left:0,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    mapView:{
        position:'absolute',
        top:0,
        bottom:0,
        right: 0,
        left:0,
        flex: 1, 
        display: 'flex',
         width: '100%', 
         height:300
    }

}


export  {Map};