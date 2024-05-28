import { View, Text, ScrollView, Image, TouchableOpacity, BackHandler, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Button from '../button template/Button';
import { StyleSheet } from "react-native";
import { useAppDispatch } from '@/hooks/use dispatch/useDispatch';
import { toggleReelsComment } from '@/lib/redux/reducers/toggle reducer/toggleReducer';

const CommentTemplate = () => {
    const dispatch = useAppDispatch()

    const disableCommentFromDisplaying = () => {
        dispatch(toggleReelsComment(false))
    }


    // useEffect(() => {

    //     const backAction = () => {

    //         if (!isCommentActive) return false
    //         closeComment(false)

    //         return true
    //     };

    //     const backHandler = BackHandler.addEventListener(
    //         'hardwareBackPress',
    //         backAction
    //     );

    //     return () => backHandler.remove();
    // }, [])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.text, styles.headerTxt]}>1.lK comments</Text>
                <Button disabled={false} onClick={disableCommentFromDisplaying} component={
                    <AntDesign name='close' style={[styles.icon, styles.headerIcon]} />
                } />
            </View>

            <ScrollView>
                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

            </ScrollView >

            <View style={[styles.header, styles.footer]}>
                <Image style={styles.profile} source={require("../../assets/images/dummy.jpeg")} />
                <View style={[styles.wrap, styles.inputBox]}>
                    <TextInput style={styles.input} placeholder={"Add comment"} />
                    <View style={[styles.wrap, styles.footerIcon]}>
                        <Entypo style={styles.icon} name="email" size={24} color="black" />
                        <Entypo style={[styles.icon, { marginLeft: 8 }]} name="emoji-flirt" size={24} color="black" />
                    </View>
                </View>
                <TouchableOpacity style={styles.submit}>
                    <AntDesign name="arrowup" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default CommentTemplate


export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        zIndex: 200,
        left: 0,
        right: 0,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        elevation: 25,
        maxHeight: "70%",
    },
    icon: {
        fontSize: 19,
    },
    text: {
        fontFamily: "KanitRegular",
        marginLeft: 5,
    },
    header: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTxt: {
        fontSize: 19,
    },
    headerIcon: {},
    wrap: {
        flexDirection: "row",
        alignItems: "center",
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    box: {
        alignItems: "center",
    },
    cmmt: {
        fontSize: 15,
    },
    name: {
        fontSize: 16,
        fontFamily: "KanitRegular",
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    btn: {
        justifyContent: "center",
    },
    profile: {
        width: 25,
        height: 25,
        borderRadius: 50,
    },
    input: {
        backgroundColor: "rgba(0,0,0,.2)",
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 7,
        width: "100%",
        fontFamily: "KanitRegular",
    },
    heart: {},
    wrapBox: {
        width: "80%",
        paddingRight: 10,
        alignItems: "flex-start",
    },
    gap: {
        marginTop: 7,
    },
    submit: {
        backgroundColor: "orangered",
        padding: 8,
        borderRadius: 50,
    },
    footer: {
        padding: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 11
    },
    inputBox: {
        flex: 1,
        marginRight: 15,
    },
    footerIcon: {
        position: "absolute",
        right: 5,
    },
});
