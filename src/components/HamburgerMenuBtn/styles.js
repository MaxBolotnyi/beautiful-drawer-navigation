import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export default StyleSheet.create({
    container: {
        width: 30,
        height: 27,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    line: {
        width: 30,
        height: 4,
        borderRadius: 3.5,
        backgroundColor: THEME.buttonsBackground
    }
});