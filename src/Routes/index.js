import React from 'react';
import { StyleSheet } from "react-native";
import { Scene, Router, Actions } from "react-native-router-flux";
import Home from "../components/Home";
import Store from '../components/Store';

const Routes = () => {
    return (
        <Router navigationBarStyle={styles.navBar} headerTitleStyle={styles.headerTitleStyle} titleStyle={styles.navTitle} hideNavBar >
            <Scene key="root" hideNavBar>
                <Scene key = "main"  >
                    <Scene key="home" component={Home} title="timeTicker" hideNavBar />
                </Scene>
                <Scene key="page">
                    <Scene key="storeEdit" component={Store} title="timeTicker" hideNavBar />
                </Scene>
                
            </Scene>
        </Router>
    )
}

const styles = StyleSheet.create({
    navBar: {
      backgroundColor: '#1976d2', // changing navbar color
    },
    navTitle: {
      color: '#fff', // changing navbar title color
    },
    headerTitleStyle: {
        textAlign: "center", 
        flex: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: '600' 
    }
  })

export default Routes;