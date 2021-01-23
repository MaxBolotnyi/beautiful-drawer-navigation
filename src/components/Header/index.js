import React from 'react';
import { View } from 'react-native';
import HamburgerBtn from '../HamburgerMenuBtn';
import Text from '../Text';
import styles from './styles';

export default function Header({
    title = '',
    onMenuClick,
    style
}) {
    return (
        <View style={[styles.container, style]}>
            <HamburgerBtn
                style={styles.menu}
                onPress={onMenuClick}
            />
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </View>
    )
}
