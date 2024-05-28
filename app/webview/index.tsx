import { StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '@/components/button template/Button';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import DownloadBtn from '@/components/download btn/DownloadBtn';
import { ThemedView } from '@/components/ThemedView';

const index = () => {
    const colorScheme = useColorScheme()
    const navigateBack = () => router.back()
    const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
    const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgLight;


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <Button disabled={false} onClick={navigateBack} component={<AntDesign name="arrowleft" size={24}
                    style={[styles.icon, colorStyle]} />} />
                <ThemedView style={styles.inputBox}>
                    <TextInput placeholderTextColor={"rgba(255,255,255,.4)"} style={styles.input} placeholder='insert link here' />
                </ThemedView>
                <Button
                    disabled={false}
                    component={
                        <AntDesign
                            name="download"
                            size={27}
                            style={[colorStyle]}
                        />
                    }
                />
            </View>

            <DownloadBtn />
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {

    },
    bgDark: {
        backgroundColor: Colors.dark.background,
    },
    bgLight: {
        backgroundColor: Colors.light.background
    },
    colorLight: {
        color: Colors.light.tint,
    },
    colorDark: {
        color: Colors.dark.tint,
    },
    wrap: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10
    },
    inputBox: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 10
    },
    input: {
        padding: 10,
        color: "white",
        fontFamily: "KanitRegular"
    }
})