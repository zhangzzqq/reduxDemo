import * as React from 'react';
import { TouchableOpacity, Text,View } from 'react-native';
import {ThemeColors, Themed, useTheme} from 'react-navigation';

export  default  function MyButton() {
    let theme = useTheme();
    let colors = ThemeColors[theme];

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: colors.bodyContent }}>
                <Themed.Text>Button!</Themed.Text>
            </TouchableOpacity>
            <Themed.StatusBar />
        </View>
    );
}
