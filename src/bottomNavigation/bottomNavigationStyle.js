import * as React from 'react';
import { View } from 'react-native';
import {
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
const ExampleScreen = View;

const Home = createStackNavigator(
    {
        Feed: ExampleScreen,
        Profile: ExampleScreen,
    },
    {
        defaultNavigationOptions: {
            title: 'Home',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#0f0',
            },
        },
        navigationOptions: {
            tabBarLabel: 'Home!',
        },
    }
);

const Tabs = createBottomTabNavigator({ Home });
export default createAppContainer(Tabs);
