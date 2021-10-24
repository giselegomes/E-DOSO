import { StyleSheet } from "react-native";
import { theme } from '../../../global/styles/theme'


export const styles = StyleSheet.create({
    btn: {
        color: '#000',
        marginTop: 45,
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        width: "90%",
        justifyContent: "center"
    },


    btnText: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
        marginRight: 10,
        color: "gray"
    },
    icon: {
        backgroundColor: "transparent",
        borderRadius: 16,
        borderColor: "#000",
    }

})