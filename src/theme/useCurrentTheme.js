import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from 'react-navigation';

// Black background and white text in light theme, inverted on dark theme
export  default  function MyButton() {
    let theme = useTheme();

    return (
        <TouchableOpacity
            style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}
        >
            <Text style={{ color: theme === 'light' ? '#ff0' : '#f00' }}>
                Button!
            </Text>
        </TouchableOpacity>
    );
}
