import { StyleSheet, View } from 'react-native'
import { Plane } from 'react-native-animated-spinkit'

export default function Spinner() {

    return (
        <View style={styles.container}>
            <Plane size={48} color="#FFF" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})