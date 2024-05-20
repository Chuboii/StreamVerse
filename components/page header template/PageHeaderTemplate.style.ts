import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
  },
  bgDark: {
    backgroundColor: Colors.dark.transparent,
  },
  bgLight: {
    backgroundColor: Colors.light.transparent,
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 20
  },
  wrapText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 20,
  },
  text: {
    fontFamily: "ExoRegular",
    textTransform: "capitalize",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    paddingBottom: 5,
    textAlign: "center",
    width: 70,
  },
  gap:{
   marginLeft:20
  },
  logoText: {
    fontFamily: "KanitRegular",
    fontSize: 25,
    textAlign: "center",
    marginLeft: 10,
  },
  logoIcon: {
    backgroundColor: "orangered",
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLight: {
    color: Colors.light.tint,
  },
  iconDark: {
    color: Colors.light.tint,
  },
  profile:{
    padding:3,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    fontSize:19,
  }
});
