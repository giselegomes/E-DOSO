import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    button: {
        backgroundColor: 'purple',
        height: 50,
        width: 120,
        borderRadius: 6,
        marginTop: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginLeft: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
    },
    ButtonContainer: {
        width: '100%',
        height: '10%',
        flex: 1, 
        flexDirection: 'row', 
        marginLeft: 45,
    }
});