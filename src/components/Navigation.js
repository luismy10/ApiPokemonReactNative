import React, { Component } from 'react';
import {Platform, Text} from 'react-native';
import {createStackNavigator, DrawerNavigator  } from 'react-navigation';
import { YellowBox } from 'react-native';
import Principal from './Principal';
import Description from './Description';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
    }

    render() {
        return (
                <AppStackNavigator />
                );
    }
}
const AppStackNavigator = createStackNavigator({
    Principal: {
        screen: Principal
    },
    Description:{
        screen: Description
    }
});





