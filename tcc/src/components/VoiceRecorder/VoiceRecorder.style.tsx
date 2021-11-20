import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    recorderView: {
        width: '100%',
        height: '15%',
        flex: 1,
        flexDirection: 'row',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: 'white', 
        zIndex: 2, 
        position: 'absolute',
        elevation: 50,
        alignItems: 'center',
    },
    icon: {
        paddingLeft: 10,
    },
    text: {
        paddingLeft: 10,
        fontSize: 25,
        color: "#000",
    }
})