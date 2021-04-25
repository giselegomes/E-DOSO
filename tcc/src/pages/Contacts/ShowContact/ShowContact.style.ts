import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  topbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teste: {
    backgroundColor: "rgba(128, 0, 128, 0.8)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 60,
    justifyContent: 'center',

  },
  cardText: {
    fontSize: 24,
    color: "white",
  },
  imageContainer: {
    borderWidth: 0,
    borderRadius: 6,
    width: 200,
    height: 190,
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: "gray",
    borderWidth: 0,
    borderRadius: 6,
    width: 200,
    height: 190,
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: 8,
    fontSize: 180,
  },
  dotIcon: {
    fontSize: 50,
  },
  penIcon: {
    fontSize: 10,
  },
  buttonCall: {
    backgroundColor: 'rgba(24,154,211, 0.7)',
    height: 50,
    width: 250,
    borderRadius: 6,
    marginTop: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonWhatsapp: {
    backgroundColor: 'rgba(46, 170, 62, 0.7)',
    height: 50,
    width: 250,
    borderRadius: 6,
    marginTop: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonMessage: {
    backgroundColor: 'rgba(9,0,136, 0.7)',
    height: 50,
    width: 250,
    borderRadius: 6,
    marginTop: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonBack: {
    backgroundColor: 'rgba(181, 0, 14, 0.7)',
    height: 50,
    width: 250,
    borderRadius: 6,
    marginTop: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonText: {
    paddingRight: 10,
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  listOptions: {
    textAlign: "left",
    fontSize: 24,
    color: "black",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
