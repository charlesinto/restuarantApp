import React from 'react';
import { View, Text } from 'react-native';

const TitleBar = ({title}) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
                {title}
            </Text>
        </View>
    );
};

const styles = {
    containerStyle:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#ffa726',
        height:40,
        padding:10
    },
    textStyle:{
        color:'#fff',
        fontSize:24,
        fontWeight:'600'
    }
}

export  {TitleBar};