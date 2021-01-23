import React from 'react';
import { View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import styles from './styles';

export default Mask = ({ children }) => {
    return <MaskedView
        style={styles.maskContainer}
        maskElement={<View style={styles.maskElement} />}
    >
        {children}
    </MaskedView >;
};
