import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Button from '../button template/Button'
import { AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';


const DownloadBtn = () => {
    const colorScheme = useColorScheme()
    const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
    const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgLight;



    return (
        <Button disabled={false} style={styles.container} component={<FontAwesome6 name="download"
            style={[styles.icon, colorStyle]} size={20} color="white" />} />
    )
}

export default DownloadBtn

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orangered",
        justifyContent: "center",
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        right: 15,
    },
    icon: {
        color: 'white'
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
})