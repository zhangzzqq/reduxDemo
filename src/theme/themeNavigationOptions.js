import {
    createAppContainer,
    ThemeContext
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator ,BottomTabBar} from 'react-navigation-tabs';
import React from 'react';
import {Button, Text, View} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        );
    }
}


const ThemeConstants = {
    light: {
        backgroundColor: '#fff',
        fontColor: '#000',
        activeTintColor: 'blue',
        inactiveTintColor: '#ccc',
    },
    dark: {
        backgroundColor: '#000',
        fontColor: '#fff',
        activeTintColor: '#fff',
        inactiveTintColor: '#888',
    },
};

// Notice how we override the `activeTintColor`, `inactiveTintColor` and
// `backgroundColor` of the tab bar with our theme styles.
  class ThemedBottomTabBar extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <BottomTabBar
                        {...this.props}
                        activeTintColor={ThemeConstants['dark'].activeTintColor}
                        inactiveTintColor={ThemeConstants['dark'].inactiveTintColor}
                        style={{
                            backgroundColor: ThemeConstants['dark'].backgroundColor,
                        }}
                    />
                )}
            </ThemeContext.Consumer>
        );
    }
}

const Stack = createStackNavigator({ Home: HomeScreen });

const Tabs = createBottomTabNavigator(
    { Stack },
    { tabBarComponent: ThemedBottomTabBar }
);
const Navigation = createAppContainer(Tabs);


export default () => <Navigation/>;
