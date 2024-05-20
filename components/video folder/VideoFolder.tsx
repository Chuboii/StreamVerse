import { View, StyleSheet, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemedText } from "@/components/ThemedText"
import { FC } from "react";

const VideoFolder: FC = () => {

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="folder-open" size={24} color="black"
        style={styles.icon} />
      <ThemedText darkColor="white" lightColor="black"
        style={styles.text} numberOfLines={2}>Camera ttt dghd dydy</ThemedText>
      <ThemedText darkColor="gray" lightColor="gray" style={[styles.text, styles.text1]}> 8 videos </ThemedText>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    minWidth: 80,
  },
  icon: {
    fontSize: 50,
    color: "orangered"
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 14,
    textAlign: 'center',
    width: 80
  },
  text1: {
    fontSize: 12
  }

})
export default VideoFolder