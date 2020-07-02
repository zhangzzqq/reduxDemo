import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from 'react-navigation';

export  default class MyButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        const theme = this.context;
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
}
