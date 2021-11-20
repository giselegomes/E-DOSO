import { StyleSheet } from "react-native";
import { Row } from "react-native-easy-grid";
// ajusta header para alguns modelos de iphone
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 134,
        paddingTop: getStatusBarHeight(),
        backgroundColor: theme.colors.mainColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 24

    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 28,
        color: theme.colors.textTitleColor,
        textTransform: 'uppercase',
        fontFamily: theme.fonts.titleHeader,
    }
});