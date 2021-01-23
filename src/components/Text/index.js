import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export default function AppText({
    style,
    children
}) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: '500',
        letterSpacing: 0,
        color: THEME.text
    }
});
