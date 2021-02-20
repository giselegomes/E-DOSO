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
    iconContainer: {
      backgroundColor: "gray",
      borderWidth: 0,
      borderRadius: 6,
      width: 150,
      justifyContent: 'space-between',
    },
    icon: {
        fontSize: 120,
      },
    button: {
      backgroundColor: 'purple',
      height: 50,
      width: 170,
      borderRadius: 6,
      marginTop: 20,
      paddingBottom: 10,
      paddingTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 22,
      textAlign: 'center',
    },
    input: {
      marginLeft: 16,
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 6,
      marginTop: 15,
      fontSize: 22,
      paddingLeft: 10,
    },
    buttonSave: {
      backgroundColor: 'purple',
      height: 50,
      width: 120,
      borderRadius: 6,
      marginTop: 20,
      paddingBottom: 10,
      paddingTop: 10,
    },
    buttonCancel: {
      marginLeft: 35,
      backgroundColor: 'purple',
      height: 50,
      width: 120,
      borderRadius: 6,
      marginTop: 20,
      paddingBottom: 10,
      paddingTop: 10,
    }
  });