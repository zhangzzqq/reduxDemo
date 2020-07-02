import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeColors, useTheme } from 'react-navigation';

export  default function MyButton() {
    let theme = useTheme();
    let colors = ThemeColors[theme];

    return (
        <TouchableOpacity style={{ backgroundColor: colors.bodyContent }}>
            <Text style={{ color: colors.label }}>Button!</Text>
        </TouchableOpacity>
    );
}
