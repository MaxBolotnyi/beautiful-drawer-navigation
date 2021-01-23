import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export default StyleSheet.create({
    maskElement: {
        backgroundColor: THEME.screenBackground,
        borderTopLeftRadius: 48,
        flex: 1
    },
    maskContainer: {
        flex: 1,
        backgroundColor: THEME.appBackground
    }
});
