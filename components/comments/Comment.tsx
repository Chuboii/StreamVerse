import { StyleSheet, TextInput, ScrollView, Text, Image, View } from 'react-native'
import VideoTemplate from "@/components/video template/VideoTemplate";

import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import React from 'react'
import { ThemedView } from "@/components/ThemedView";


const Comment = () => {
  const colorScheme = useColorScheme()
  const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgDark;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.wrapBox}>
        <ThemedText style={[styles.text, styles.comment]}> Comments </ThemedText>
        <Button disabled={false} component={
          <AntDesign name="close" style={[styles.icon]} />} />
      </View>

      <View style={styles.wrap}>
        <Image style={styles.profileImage}
          source={require("../../assets/images/dummy.jpeg")} />

        <View style={styles.box}>
          <View style={styles.wrap}>
            <ThemedText style={styles.text}> Joe Doe </ThemedText>
            <ThemedText style={styles.text}> 2y ago </ThemedText>
          </View>

          <ThemedText style={[styles.text, styles.comment]}> This is a nasty comment </ThemedText>


          <Button disabled={false} component={
            <>
              <AntDesign name="like2" style={styles.icon} />
              <ThemedText style={[styles.text, styles.num]}> 55 </ThemedText>
            </>
          } />
          <Button disabled={false} component={
            <>
              <FontAwesome name="comment" style={styles.icon} />
              <ThemedText style={[styles.text, styles.num]}> 55 </ThemedText>
            </>
          } /></View>

        <Button disabled={false} component={
          <FontAwesome name="ellipsis-v" style={styles.icon} />} />
      </View>





      <ThemedView style={styles.wrap}>
        <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")} />
        <TextInput placeholderTextColor="rgba(255,255,255,.4)" placeholder="Add a comment" />
      </ThemedView>
    </ThemedView>
  )
}

export default Comment

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    bottom: 0,
    padding: 10,
    justifyContent: "space-between",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 250
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    color: "white"
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  wrapBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50
  },
  text: {
    fontFamily: "KanitRegular"
  },
  bgDark: {
    backgroundColor: Colors.dark.transparent,
  },
  bgLight: {
    backgroundColor: Colors.light.transparent,
  },
  num: {

  },
  comment: {

  },
  box: {

  }
})