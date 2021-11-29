import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  imageContainer: {
    padding: 5,
    width: 75,
    height: 75,
  },
  options: {
    paddingLeft: 20,
    fontSize: 24,
    color: "black",
  },
  searchSection: {
    flex: 1,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0dede',
    borderRadius: 6,
    marginTop: 5,
  },
  searchIcon: {
    padding: 5,
  },
  input: {
    marginTop: 5,
    fontSize: 24,
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  listContainer: {
    borderBottomWidth: 2, 
    borderBottomColor: '#e0dede', 
    paddingLeft: 10, 
    paddingBottom: 10,
    paddingTop: 10, 
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalView: {
    width: "100%", 
    alignItems: "center", 
    marginTop: 100, 
    height: '35%', 
    position: 'absolute'
  }
});
