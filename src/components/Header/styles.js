import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';


export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    menu: {
        marginHorizontal: 35
    },
    text: {
        color: THEME.title,
        fontSize: 24,
        letterSpacing: 5
    }
});
