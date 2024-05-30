"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var react_native_1 = require("react-native");
var Colors_1 = require("@/constants/Colors");
var screenWidth = react_native_1.Dimensions.get("window").width;
exports.styles = react_native_1.StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        height: 120,
        marginVertical: 5,
    },
    wrapper: {
        marginLeft: 15,
        justifyContent: "space-between",
        width: "60%",
        paddingRight: 10,
    },
    wrap: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageBox: {
        width: "40%",
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    mins: {
        backgroundColor: "rgba(0,0,0,.4)",
        position: "absolute",
        right: 5,
        bottom: 5,
        color: "white",
        padding: 5,
        borderRadius: 5,
    },
    text: {
        fontFamily: "KanitRegular",
        fontSize: 14,
        color: "gray",
        marginRight: 5,
    },
    float: {
        position: "absolute",
        left: 5,
        bottom: 5,
        color: "white",
        padding: 5,
        borderRadius: 5,
        zIndex: 1,
        fontSize: 17,
        backgroundColor: "rgba(0,0,0,.4)",
    },
    title: {
        width: screenWidth - 200,
        fontFamily: "ExoRegular",
    },
    iconLight: {
        color: Colors_1.Colors.light.tint,
    },
    iconDark: {
        color: Colors_1.Colors.dark.tint,
    },
    icon: {
        fontSize: 15,
        marginRight: 6,
    },
    wrapBox: {
        flexDirection: "row",
        padding: 7,
        borderRadius: 5,
        alignItems: "center",
    },
    wrapData: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
    albumTitle: {
        maxWidth: 100,
        textTransform: "lowercase",
    },
});
