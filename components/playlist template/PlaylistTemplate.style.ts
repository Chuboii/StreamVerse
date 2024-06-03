import {
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { Colors } from "@/constants/Colors";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    height: 120,
    marginVertical: 3,
    alignItems: "center",
  },
  wrapper: {
    marginLeft: 25,
    justifyContent: "space-between",
    paddingRight: 10,
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "52%",
  },
  imageBox: {
    width: "40%",
  },
  img: {
    width: "100%",
    height: 60,
    zIndex: 19,
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 14,
    color: "gray",
    marginRight: 5,
  },
  title: {
    width: screenWidth - 200,
    fontFamily: "ExoRegular",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    fontSize: 18,
  },
  wrapBox: {
    flexDirection: "row",
  },
  iconLight: {
    color: Colors.light.tint,
  },
  iconDark: {
    color: Colors.light.tint,
  },
  imageShade: {
    width: "100%",
    backgroundColor: "gray",
    left: 6,
    position: "absolute",
    height: "90%",
    elevation: 10,
    borderRadius: 10,
    zIndex: 10,
  },
  imageShade2: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255,.4)",
    left: 12,
    position: "absolute",
    height: "80%",
    elevation: 5,
    borderRadius: 10,
  },
  imageWrapper: {
    paddingHorizontal: 6,
  },
});
