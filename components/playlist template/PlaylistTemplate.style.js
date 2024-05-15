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
        height: 110,
        marginVertical: 5,
        alignItems: "center"
    },
    wrapper: {
        marginLeft: 15,
        justifyContent: "space-between",
        width: "60%",
        paddingRight: 10
    },
    wrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    imageBox: {
        width: "40%"
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    text: {
        fontFamily: "KanitRegular",
        fontSize: 14,
        color: "gray",
        marginRight: 5
    },
    title: {
        width: screenWidth - 200,
        fontFamily: "ExoRegular",
        marginBottom: 10
    },
    icon: function (colorScheme) { return ({
        color: Colors_1.Colors[colorScheme !== null && colorScheme !== void 0 ? colorScheme : "light"].tint,
        marginRight: 10,
        fontSize: 18
    }); },
    wrapBox: {
        flexDirection: "row",
    }
});
