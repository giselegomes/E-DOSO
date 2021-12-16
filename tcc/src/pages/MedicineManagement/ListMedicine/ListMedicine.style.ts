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
        fontSize: 30,
        textAlign: 'center',
        marginRight: 10,
        color: "gray",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    icon: {
        backgroundColor: "transparent",
        borderRadius: 16,
        borderColor: "#000",
    },
    titleList: {
        fontSize: 30,
        textAlign: "center",
        paddingVertical: 20
    },
    list: {
        backgroundColor: "transparent",
        paddingHorizontal: 24,
        paddingVertical: 24,
        fontSize: 26,
        borderColor: "red",

    },
    imageContainer: {
      borderWidth: 0,
      borderRadius: 6,
      width: 100,
      height: 100,
      justifyContent: 'space-between',
    },
    iconContainer: {
      backgroundColor: "gray",
      borderWidth: 0,
      borderRadius: 6,
    },
    iconMeds: {
      fontSize: 90,
    },

})