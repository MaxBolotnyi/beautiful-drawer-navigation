import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

const PLACEHOLDER = '';

export default function HamburgerBtn({
    onPress,
    style
}) {
    const linesNumber = React.useRef(3);
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, style]}
        >
            {new Array(linesNumber.current).fill(PLACEHOLDER).map((_item, index) => {
                // only use index here as a key because of it's being a test project and 
                // because we don't have to rearrange the order of the elements.
                return <View key={index} style={styles.line} />
            })}
        </TouchableOpacity>
    )
}
