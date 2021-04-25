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
    addContact: {
        textAlign: "left",
        fontSize: 24,
        color: "black",
    },
    listContainer: {
        width: "90%",
        flex: 1,
        height: "100%",
        marginTop: 10,
        borderRadius: 6,
        marginLeft: 20,

    },
    input: {
        marginTop: 5,
        fontSize: 24,
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 10,
    },
    searchSection: {
        flex: 1,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e0dede',
        borderRadius: 6,
        paddingRight: 8,
        paddingLeft: 8,
    },
    searchIcon: {
        padding: 5,
    },
    contacts: {
        textAlign: "left",
        fontSize: 24,
        color: "black",
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 2,
        borderTopColor: '#e0dede',
    },
    firstContact: {
        marginTop: 15,
        textAlign: "left",
        fontSize: 24,
        color: "black",
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }
});