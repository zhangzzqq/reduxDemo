import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';
import {  TabNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
//Cannot resolve symbol 'TabNavigator'
class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: '热点',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../res/images/hot_hover.png') : require('../res/images/hot.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>！这是热点</Text>
            </View>
        );
    }
}

class Circle extends React.Component {
    static navigationOptions = {
        tabBarLabel: '圈子',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../res/images/coterie.png') : require('../res/images/coterie.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>！这是圈子</Text>
            </View>
        );
    }
}

class Tools extends React.Component {
    static navigationOptions = {
        tabBarLabel: '工具',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../res/images/tool.png') : require('../res/images/tool.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>！这是工具</Text>
            </View>
        );
    }
}

class Mypage extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../res/images/my_hover.png') : require('../res/images/my.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>！这是我的</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

const MyApp = createBottomTabNavigator( {
    Home: {
        screen: Home,
    },
    Circle: {
        screen: Circle,
    },
    Tools: {
        screen: Tools,
    },
    Mypage: {
        screen: Mypage,
    },
},

    {
        tabBarOptions: {
            activeTintColor: '#4BC1D2',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
    }

    );

const MyApp2 = TabNavigator(
    {
        Home: {
            screen: Home,
        },
        Circle: {
            screen: Circle,
        },
        Tools: {
            screen: Tools,
        },
        Mypage: {
            screen: Mypage,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#4BC1D2',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
    }

    );

module.exports = MyApp;
