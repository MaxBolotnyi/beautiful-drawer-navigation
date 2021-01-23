import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DrawerItemList } from '@react-navigation/drawer';

import Container from '../Container';
import Mask from '../Mask';
import Text from '../Text';
import { COLORS } from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function CustomDrawerContent(props) {
    const {
        changeProgress,
        progress
    } = props;

    React.useEffect(() => {
        changeProgress(progress);
    }, [changeProgress, progress]);

    return (
        <Mask>
            < Container>
                {/* would normaly be fetched and stored */}
                <Text style={styles.user}>Max</Text>
                <DrawerItemList {...props} />
                <View style={styles.divider} />
                <TouchableOpacity style={styles.signOutBtn}>
                    <Text style={styles.signOut}>Sign Out</Text>
                </TouchableOpacity>
            </ Container>
        </Mask >
    );
};

const styles = StyleSheet.create({
    user: {
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'left',
        marginTop: 120,
        marginBottom: 57,
        marginLeft: 30
    },
    divider: {
        height: 1,
        width: 175,
        marginLeft: 10,
        marginVertical: 40,
        backgroundColor: COLORS.blueGray
    },
    signOutBtn: {
        marginLeft: 30
    },
    signOutText: {
        fontSize: 20
    }
});

