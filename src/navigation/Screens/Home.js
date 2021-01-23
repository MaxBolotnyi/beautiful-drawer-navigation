import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Header from '../../components/Header';
import { THEME } from '../../constants/theme';

export default function HomeScreen({
    progress,
    route,
    navigation
}) {
    const rotate = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: ['0deg', '-7deg']
    })

    const translateY = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 10]
    })

    const transformStyle = { transform: [{ rotate }, { translateY }] };

    return (
        <Animated.View style={[styles.container, transformStyle]}>
            <SafeAreaView>
                <Header
                    style={styles.header}
                    title={route.name}
                    onMenuClick={navigation.openDrawer}
                />
            </SafeAreaView>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.screenBackground,
        borderTopLeftRadius: 47
    },
    header: {
        marginTop: 20
    }
});
