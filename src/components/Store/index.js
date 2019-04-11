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
            <View>
                {
                        Helper.isEmpty(this.props.storeDetail) ? null
                        :
                        <View>
                            <View style={{ height:300}}>
                                <CardImage
                                    type="SHOP"
                                    image_url={this.props.storeDetail.image_url}
                                    distance={0}
                                    handleOnpress={() => this.props.goToHome()}
                                />
                            </View>
                            <View>
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
                                <View style={{height:400}}>
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
                <ScrollView  contentContainerStyle={{flexGrow: 1}} >
                    <View>
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