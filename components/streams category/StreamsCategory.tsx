import { StyleSheet, Text, View } from 'react-native'

import VideoTemplate from "@/components/video template/VideoTemplate";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import React, { FC } from 'react'

type Prop = {
  containerStyle: object;
  textStyle: object;
  text: string;
}
const StreamsCategory: FC<Prop> = ({ text = "", containerStyle = {}, textStyle = {} }) => {

  return (
    <ThemedView style={[styles.container, containerStyle]}>
      <ThemedText style={[styles.text, textStyle]}> Trending </ThemedText>
    </ThemedView>
  )
}

export default StreamsCategory

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    padding: 15,
    borderRadius: 7,
    paddingVertical: 8
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 14
  }
})