import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    modal: {
        width: '85%', 
        borderWidth: 1,
        borderColor: '#715071',
        borderRadius: 6, 
        position: 'absolute', 
        backgroundColor: 'white', 
        zIndex: 1, 
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    buttonImage: {
        backgroundColor: 'rgba(128, 0, 128, 0.8)',
        height: 50,
        width: 200,
        borderRadius: 6,
        marginTop: 20,
        paddingBottom: 10,
        paddingTop: 10,
      },
      buttonCancel: {
        backgroundColor: 'rgba(181, 0, 14, 0.7)',
        height: 50,
        width: 200,
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
      modalTitle: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 26,
        textAlign: 'center',  
      },
      iconContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
      },
      icon: {
          color: 'rgba(128, 0, 128, 0.8)',
      },
      nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
      },
  });