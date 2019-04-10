import React from 'react';
import { View, Text  } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 
import { Rating } from "../Common";

const StoreDetail = ({rating, name, title}) => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.nameTypeStyle}>
                <Text style={styles.companyNameStyle}>{name}</Text>
                <Text style={styles.typeStyle}> {title}</Text>
            </View>
            <View style={styles.ratingContainerStyle}>
                <Text style={styles.ratingTextStyle}>{rating}</Text>
                <View style={{ display:'flex', flexDirection:'row',alignItems:'center', flexGrow: 1}}>
                    <Rating rating={rating} />
                </View>
            </View>
        </View>
    );
};


const styles = {
    containerStyle:{
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'column',
        flex: 1,
        width:'100%',
        paddingBottom: 30
    },
    nameTypeStyle:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    companyNameStyle:{
        flex:2,
        padding:10,
        fontSize:18,
        fontWeight:'600',
        color:'#000',
        flexWrap:'wrap'
    },
    typeStyle:{
        flex:1,
        padding:10,
        fontSize:16,
        fontWeight:'400',
        color:'#000',
        textAlign:'right'
    },
    ratingContainerStyle:{
        display:'flex',
        width:'100%',
        flexDirection:'row'
    },
    ratingTextStyle:{
        padding:10,
        color:'#000',
        fontSize:16
    }
}

export  {StoreDetail};