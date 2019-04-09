import React from 'react';
import { View, Text  } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 

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
                    {renderStars(rating)}
                </View>
            </View>
        </View>
    );
};

const renderStars = rating => {
    const maxRating = 5;
    let difference = 0
    const stars = [];
    if(rating === maxRating){
        for(let i = 0; i < maxRating; i++){
            stars.push(
                <Icon 
                    name="ios-star"
                    size={24}
                    color={'#ffa726'}
                />
            )
        }
    }else{
        for(let i = 0; i < Math.floor(rating); i++){
            stars.push(
                <Icon 
                    name="ios-star"
                    size={24}
                    color={'#ffa726'}
                />
            )
        }
        const difference = maxRating - rating;
        if(isFloat(difference)){
            stars.push(
                <Icon 
                    name="ios-star-half"
                    size={24}
                    color={'#ffa726'}
                />
            )
        }
        if(difference !== 0){
            for(let i = 0; i < Math.floor(difference); i++){
                stars.push(
                    <Icon 
                        name="ios-star"
                        size={24}
                    />
                )
            }
        }
    }
    return renderStarIcon(stars);
}
renderStarIcon = stars => (
    stars.map((star, i) => (
        <View key={i} style={{marginLeft:5}}>
            {star}
        </View>
    ))
)
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
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