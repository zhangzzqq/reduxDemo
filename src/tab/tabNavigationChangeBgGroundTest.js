import React from 'react';
import { Text, View ,TouchableOpacity,Button} from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppearanceProvider } from 'react-native-appearance';
import { Appearance, useColorScheme } from 'react-native-appearance';
import { Themed } from 'react-navigation';
import { ThemeColors, useTheme } from 'react-navigation';
import { ThemeContext } from 'react-navigation';
/**
 * Get the current color scheme
 */
Appearance.getColorScheme();

/**
 * Subscribe to color scheme changes with a hook
 */
function MyComponent() {
    const colorScheme = useColorScheme();
    if (colorScheme === 'dark') {
        // render some dark thing
    } else {
        // render some light thing
    }
}

/**
 * Subscribe to color scheme without a hook
 */
const subscription = Appearance.addChangeListener(({ colorScheme }) => {
    // do something with color scheme
});

{/*无法使用*/}
function myButton() {
    let theme = useTheme();

    return (
        <TouchableOpacity
            style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}
        >
            <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>
                Button!
            </Text>
        </TouchableOpacity>
    );
}



class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <View style={{marginTop:20}} >

                    <Button
                        onPress={myButton}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />

                </View>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
},
    {
        tabBarOptions: {
            activeTintColor: {
                light: '#f00',
                dark: '#1d1e21',
            },
            inactiveTintColor: {
                light: '#dd0',
                dark: '#00f',
            },

            // activeBackgroundColor:{
            //     light: '#f00',
            //     dark: '#00f',
            //
            // }
        },
    }




);

// export default createAppContainer(TabNavigator);
let Navigation = createAppContainer(TabNavigator);
// export default () => <Navigation theme="dark" />;

export default () => {
    let theme = useColorScheme();

    return (
            <Navigation theme="dark" />
    )
}


// export default () => (
//     <AppearanceProvider>
//         <Navigation />
//     </AppearanceProvider>
// );

// export default () => (
//     <AppearanceProvider>
//         <Navigation />
//         </AppearanceProvider>
//          );

