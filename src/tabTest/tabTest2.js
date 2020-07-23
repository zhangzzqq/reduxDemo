import React, {PureComponent} from 'react';
import {StyleSheet, Image} from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Home from './tab/HomePage'
import Mine from './tab/MinePage'

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarLabel: '首页',
                tabBarIcon:({focused})=>{
                    if(focused){
                        return(
                            <Image/>   //选中的图片
                        )
                    }else{
                        return(
                            <Image/>   //默认图片
                        )
                    }
                }
            }),
        },
        Mine: {
            screen: Mine,
            navigationOptions: () => ({
                tabBarLabel: '我的',
                tabBarIcon:({focused})=>{
                }
            })
        }
    }, {  //默认参数设置
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        showIcon: true,
        showLabel: true,
        pressOpacity: 0.8,
        tabBarOptions: {
            activeTintColor: 'green',
            style: {
                backgroundColor: '#fff',
            },
        }
    }
);

const AppContainer = createAppContainer(BottomTabNavigator);

export default class TabBottomNavigatorPage extends PureComponent {

    render() {
        return (
            <AppContainer/>
        );
    }
}
