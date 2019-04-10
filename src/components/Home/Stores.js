import React, { PureComponent } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { Card } from "../../Common";
import * as actions from '../../Actions';

class Stores extends PureComponent {
    componentDidMount(){
        this.props.fetchBusinesses();
        this.renderCard = this.renderCard.bind(this);
        this.keyExtractor = this.keyExtractor.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
    }
    loadMoreData(){
        this.props.fetchMoreData(this.props.business, this.props.skip, this.props.limit)
    }
    keyExtractor(item){
        return item.id
    }
    handleOnpress(id, distance){
        this.props.goToShop(id, distance);
    }
    renderCard({item}){
        console.log('item', item)
        return (
                <TouchableOpacity onPress={() => this.handleOnpress(item.id, item.distance)}>
                    <Card business={item} key={item.id} type="Home" />
                </TouchableOpacity>
        )
    }
    itemSeparator(){
        return (
            <View style={{paddingBottom:60}}/>
        )
    }
    renderStores(){
       return  this.props.business.length > 0 ? <FlatList data={this.props.business} 
                    renderItem={this.renderCard} keyExtractor={this.keyExtractor}
                    onEndReachedThreshold={0.5}
                    onEndReached={this.loadMoreData} style={{marginBottom:10}} /> : null
    }
    render() {
        return (
            <View style={{display:'flex', flex: 1, flexDirection:'column'}}>
                {this.renderStores()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    const { business, skip, limit} = state.store;
    return {
        business,
        skip,
        limit
    }
}

export default connect(mapStateToProps, actions)(Stores);