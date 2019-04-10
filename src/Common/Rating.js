import React from 'react';
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; 

const Rating = ({rating}) => {
    return (
        <View style={{ display:'flex', flexDirection:'row',alignItems:'center', flexGrow: 1}}>
            {renderStars(rating)}
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

export {Rating};