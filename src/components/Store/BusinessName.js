import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Rating } from "../../Common";

class BusinessName extends Component {
    render() {
        console.log(this.props)
        return (
            <View  style={styles.containerStyle}>
                <View style={styles.thumbImage}>
                    <Image
                        source={{uri:this.props.thumbImage}} 
                        resizeMode={'cover'}
                        style={{flex:1 , width: null, height: null}}
                    />
                </View>
                <View style={{display:'flex', flexGrow:1, flexDirection:'column', marginRight: 10}}>
                    <View>
                        <Text style={styles.companyStyle}>{this.props.name}</Text>
                    </View>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Text style={{color:'#ffa726'}}>{this.props.rating}</Text>
                        <View style={{display:'flex', flexDirection:'column'}}>
                            <Rating 
                                rating={this.props.rating}
                            />
                            <View style={{display:'flex', paddingLeft:5}}>
                                <Text style={{fontSize:14, color:'#000'}}>{this.props.title}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{display:'flex', justifyContent:'center', paddingRight: 10}}>
                    <TouchableOpacity onPress={() => this.props.onPress()}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonStyle}>{ (this.props.distance/1000).toFixed(2)} Km</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle:{
        width: '100%',
         backgroundColor:'#fff',
         paddingBottom:10, 
         paddingTop:10, 
         display: 'flex', 
         flexDirection:'row',
         borderColor:'#D3D3D3',
         borderWidth:1,
    },
    buttonStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 16,
        marginRight: 10
    },
    thumbImage:{
        width:64, 
        height:64, 
        borderRadius:32, 
        display:'flex',
        paddingRight:10, 
        paddingLeft:10,
    },
    companyStyle: {
        padding:10,
        fontSize:18,
        fontWeight:'600',
        color:'#000',
        width:'80%',
        flexWrap:'wrap'
    },
    buttonContainer:{
        shadowColor: 'rgba(0,0,0,0.16)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor:'#ffa726',
        borderWidth:1,
        borderColor:'#ffa726', 
        display:'flex', 
        justifyContent:'center',
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft:7,
        paddingRight: 5,
         color:'#fff', 
         alignItems:'center'
    }
}

export default BusinessName;