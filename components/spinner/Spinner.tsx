import { StyleSheet, View } from 'react-native'
import { Plane, Pulse, Wave } from 'react-native-animated-spinkit'
import { ThemedText } from '../ThemedText'

export default function Spinner({ message = "Fetching video files..." }) {

    return (
        <View style={styles.container}>
            <Wave size={30} color="#FFF" />
            <ThemedText style={styles.text}>{message}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50,
        marginHorizontal: 100,
        padding: 5
    },
    text: {
        fontFamily: "KanitRegular",
        marginLeft: 10
    }
})