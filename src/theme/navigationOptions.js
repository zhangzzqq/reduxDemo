import {
    ThemeColors,
    createAppContainer,
} from 'react-navigation';

import { TouchableOpacity, Text,View,Button } from 'react-native';
import React from 'react';



export  default class HomeScreen extends React.Component {
    static navigationOptions = ({ theme }) => {
        return {
            title: 'Home',
            headerLeft: () => (
                <Button
                    color={theme === 'dark' ? 'white' : 'blue'}
                    title="Press me"
                    onPress={() => alert('success!')}
                />
            ),
        };
    };

    render() {
        // etc...
    }
}
