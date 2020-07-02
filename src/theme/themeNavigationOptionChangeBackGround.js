import * as React from 'react';
import {Text, TouchableOpacity, StatusBar, View, Image} from 'react-native';
import {
    createAppContainer,

} from 'react-navigation';
// import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator ,BottomTabBar} from 'react-navigation-tabs';
// import {Button, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const ThemeContext = React.createContext(null);
const ThemeConstants = {
    light: {
        backgroundColor: '#fff',
        fontColor: '#000',
        activeTintColor: 'blue',
        inactiveTintColor: '#ccc',
        borderColor: 'rgba(0,0,0,0.2)',
    },
    dark: {
        backgroundColor: '#000',
        fontColor: '#fff',
        activeTintColor: '#fff',
        inactiveTintColor: '#888',
        borderColor: 'rgba(255,255,255,0.2)',
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
                        activeTintColor={ThemeConstants[theme].activeTintColor}
                        inactiveTintColor={ThemeConstants[theme].inactiveTintColor}
                        style={{
                            backgroundColor: ThemeConstants[theme].backgroundColor,
                            borderTopColor: ThemeConstants[theme].borderColor,
                        }}
                    />
                )}
            </ThemeContext.Consumer>
        );
    }
}

class ThemedButton extends React.Component {
    render() {
        let { title, ...props } = this.props;
        return (
            <TouchableOpacity {...props}>
                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <Text style={{ color: ThemeConstants[theme].fontColor }}>
                            {title}
                        </Text>
                    )}
                </ThemeContext.Consumer>
            </TouchableOpacity>
        );
    }
}

class ThemedView extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <View
                        {...this.props}
                        style={[
                            this.props.style,
                            { backgroundColor: ThemeConstants[theme].backgroundColor },
                        ]}
                    />
                )}
            </ThemeContext.Consumer>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = ({ screenProps }) => {
        let currentTheme = ThemeConstants[screenProps.theme];

        return {
            title: 'Home',
            headerTintColor: currentTheme.fontColor,
            headerStyle: {
                backgroundColor: currentTheme.backgroundColor,
                borderBottomColor: currentTheme.borderColor,
            },
        };
    };

    render() {
        return (
            <ThemedView
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ThemeContext.Consumer>
                    {({ toggleTheme }) => (
                        <ThemedButton title="Toggle theme" onPress={toggleTheme} />
                    )}
                </ThemeContext.Consumer>
            </ThemedView>
        );
    }
}

const Stack = createStackNavigator(
    { Home: HomeScreen },
    {
        navigationOptions: ({ screenProps }) => {
            let currentTheme = ThemeConstants[screenProps.theme];

            return {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor, horizontal }) => (
                    // <Image
                    //     name="ios-home"
                    //     size={horizontal ? 20 : 25}
                    //     color={tintColor}
                    // />

                    <Image
                        source={require('../image/test.png')}
                        style={{ width: 24, height:24 }}
                    />
                ),
            };
        },
    }
);
const Tabs = createBottomTabNavigator(
    { HomeTab: Stack },
    { tabBarComponent: ThemedBottomTabBar }
);
const Navigation = createAppContainer(Tabs);

export default class AppContainer extends React.Component {
    state = {
        theme: 'light',
    };

    toggleTheme = () => {
        this.setState(({ theme }) => ({
            theme: theme === 'light' ? 'dark' : 'light',
        }));
    };

    render() {
        return (
            <ThemeContext.Provider
                value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
                <Navigation screenProps={{ theme: this.state.theme }} />
                <StatusBar
                    barStyle={this.state.theme === 'light' ? 'default' : 'light-content'}
                />
            </ThemeContext.Provider>
        );
    }
}
