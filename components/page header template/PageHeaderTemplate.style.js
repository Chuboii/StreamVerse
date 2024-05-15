"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var react_native_1 = require("react-native");
var Colors_1 = require("@/constants/Colors");
exports.styles = react_native_1.StyleSheet.create({
    container: function (colorScheme) { return ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 0,
        backgroundColor: Colors_1.Colors[colorScheme !== null && colorScheme !== void 0 ? colorScheme : "light"].transparent
    }); },
    wrap: function (colorScheme) { return ({
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors_1.Colors[colorScheme !== null && colorScheme !== void 0 ? colorScheme : "light"].gray,
        padding: 15,
        paddingVertical: 10,
        borderRadius: 15
    }); },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: function (colorScheme, margin) { return ({
        color: Colors_1.Colors[colorScheme !== null && colorScheme !== void 0 ? colorScheme : "light"].tint,
        fontSize: 20,
        marginRight: margin
    }); },
    selected: function (colorScheme, margin) { return ({
        backgroundColor: Colors_1.Colors[colorScheme !== null && colorScheme !== void 0 ? colorScheme : "light"].transparent,
        color: Colors_1.Colors[colorScheme !== null && colorScheme !== void 0 ? colorScheme : "light"].tint,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginRight: margin
    }); },
    wrapText: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: 20
    },
    text: {
        fontFamily: "ExoRegular",
        textTransform: "capitalize",
        borderBottomColor: "red",
        borderBottomWidth: 1,
        paddingBottom: 5,
        textAlign: "center",
        width: 70
    },
    logoText: function (colorScheme) { return ({
        fontFamily: "KanitRegular",
        fontSize: 25,
        textAlign: "center",
        marginLeft: 10,
        color: Colors_1.Colors[colorScheme !== null && colorScheme !== void 0 ? colorScheme : "light"].tint,
    }); },
    wrap: {
        flexDirection: "row",
        alignItems: "center"
    },
    logoIcon: {
        backgroundColor: "orangered",
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    }
});
