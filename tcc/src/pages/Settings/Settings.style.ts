import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    topbar: {
        backgroundColor: "purple",
        alignSelf: 'stretch',
        flex: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        justifyContent: 'space-between',
    },
    cardText: {
        textAlign: "left",
        fontSize: 24,
        color: "white",
    },
    searchIcon: {
        padding: 5,
    },
    options: {
        paddingLeft: 5,
        textAlign: "left",
        fontSize: 24,
        color: "black",
    },
    list: {
        borderTopWidth: 2, 
        borderTopColor: '#e0dede', 
        paddingLeft: 10, 
        paddingBottom: 10,
        paddingTop: 10, 
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    }
});