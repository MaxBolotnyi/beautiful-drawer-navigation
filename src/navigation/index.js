import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import HomeScreen from './Screens/Home';
import DrawerContent from '../components/Drawer';

import Container from '../components/Container';

import { DRAWER_WIDTH } from '../constants/common';
import { SCREENS } from '../constants/screens';
import { THEME } from '../constants/theme';

import styles from './styles';

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
    const [progress, setProgress] = React.useState(new Animated.Value(0));

    // I would normaly use Stack here and animate the Stack itself, while keeping the navigation part handled
    // within the stack, however for the demo purposes in order to save time I'am going with reusing 1 screen
    // component and animating them separately.
    const renderScreen = props => <HomeScreen {...props} progress={progress} />;

    return (
        <Container>
            <View style={styles.safeTopArea} />
            <StatusBar
                //for Android
                backgroundColor={THEME.screenBackground}
                barStyle="dark-content"
            />

            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName={SCREENS.START}
                    drawerType={'back'}
                    overlayColor="transparent"
                    drawerStyle={{ width: DRAWER_WIDTH }}
                    drawerContentOptions={{
                        activeTintColor: THEME.selected,
                        inactiveTintColor: THEME.text,
                        itemStyle: styles.itemStyle,
                        labelStyle: styles.labelStyle
                    }}
                    drawerContent={(props) => {
                        return <DrawerContent changeProgress={setProgress} {...props} />;
                    }}
                    sceneContainerStyle={styles.sceneContainer}
                >
                    <Drawer.Screen name={SCREENS.START}>
                        {renderScreen}
                    </Drawer.Screen>
                    <Drawer.Screen name={SCREENS.CART}>
                        {renderScreen}
                    </Drawer.Screen>
                    <Drawer.Screen name={SCREENS.FAVOURITES}>
                        {renderScreen}
                    </Drawer.Screen>
                    <Drawer.Screen name={SCREENS.ORDERS}>
                        {renderScreen}
                    </Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        </Container >
    );
}