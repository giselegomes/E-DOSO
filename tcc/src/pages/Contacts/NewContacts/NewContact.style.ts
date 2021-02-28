import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  nonBlurredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  filter: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  topbar: {
    backgroundColor: "rgba(128, 0, 128, 0.8)",
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
  imageContainer: {
    borderWidth: 0,
    borderRadius: 6,
    width: 150,
    height: 140,
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: "gray",
    borderWidth: 0,
    borderRadius: 6,
    width: 150,
    height: 140,
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: 8,
    fontSize: 120,
  },
  button: {
    backgroundColor: 'rgba(128, 0, 128, 0.8)',
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
    backgroundColor: 'rgba(46, 170, 62, 0.7)',
    height: 50,
    width: 120,
    borderRadius: 6,
    marginTop: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonCancel: {
    marginLeft: 35,
    backgroundColor: 'rgba(181, 0, 14, 0.7)',
    height: 50,
    width: 120,
    borderRadius: 6,
    marginTop: 20,
    paddingBottom: 10,
    paddingTop: 10,
  }
});