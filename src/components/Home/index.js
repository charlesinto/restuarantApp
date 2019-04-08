import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Header } from "../../Common";

import Stores from "./Stores";

class index extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1,display:'flex', flexDirection:'column'}}>
                <ScrollView contentContainerStyle={{flex: 1, display:'flex'}} style={{flex: 1, display: 'flex'}}>
                    <View style={{display:'flex', flex: 1, backgroundColor:'#e2e1e0'}}> 
                        <Header  title={"Restuarant"}/>
                        <Stores />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default index;