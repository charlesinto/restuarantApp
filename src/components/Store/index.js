import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { CardImage } from "../../Common";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import Helper from "../../Helper";

import BusinessName from "./BusinessName";
import  Contact from "./Contact";
import UserService from "./UserService";
import { Map } from "../../Common";

class index extends Component {
    handleShopOrder(id){
        console.log(id)
    }
    renderView(){
        return (
            <View style={{display:'flex',width:'100%', flex:1}}>
                {
                        Helper.isEmpty(this.props.storeDetail) ? null
                        :
                        <View style={{display:'flex',flex:1, width:'100%'}}>
                            <View style={{display:'flex', height:300}}>
                                <CardImage
                                    type="SHOP"
                                    image_url={this.props.storeDetail.image_url}
                                    distance={0}
                                    handleOnpress={() => this.props.goToHome()}
                                />
                            </View>
                            <View style={{display:'flex', width:'100%'}}>
                                <BusinessName
                                    rating={this.props.storeDetail.rating}
                                    thumbImage={this.props.storeDetail.photos[0]}
                                    onPress={() => this.handleShopOrder(this.props.storeDetail.id)}
                                    name={this.props.storeDetail.name}
                                    distance={this.props.distance}
                                    title={this.props.storeDetail.categories[0].title}
                                />
                                <Contact />
                                <UserService />
                                <View style={{width:'100%', height:400, display:'flex'}}>
                                    <Map 
                                        longitude={this.props.storeDetail.coordinates.longitude}
                                        latitude={this.props.storeDetail.coordinates.latitude}
                                    />
                                </View>
                            </View>
                        </View>
                    }
            </View>
        )
    }
    render() {
        return (
           <View style={{display:'flex', flex: 1}}>
                <ScrollView  contentContainerStyle={{display:"flex", flex:1, flexGrow: 1}} style={{display:'flex', flex: 1}}>
                    <View style={{display:'flex',flex:1, width:'100%'}}>
                        {this.renderView()}
                    </View>
                </ScrollView>
           </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.shop)
    const {storeDetail, distance} = state.shop;
    return {
        storeDetail,
        distance
    }
}

export default connect(mapStateToProps, actions)(index);