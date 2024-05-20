"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var react_native_1 = require("react-native");
var Colors_1 = require("@/constants/Colors");
exports.styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 0,
    },
    bgDark: {
        backgroundColor: Colors_1.Colors.dark.transparent,
    },
    bgLight: {
        backgroundColor: Colors_1.Colors.light.transparent,
    },
    colorLight: {
        color: Colors_1.Colors.light.tint,
    },
    colorDark: {
        color: Colors_1.Colors.dark.tint,
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
    gap: {
        marginLeft: 20
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
        color: Colors_1.Colors.light.tint,
    },
    iconDark: {
        color: Colors_1.Colors.light.tint,
    },
    profile: {
        padding: 3,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 19,
    }
});
