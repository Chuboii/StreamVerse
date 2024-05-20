import { StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native'
import VideoTemplate from "@/components/video template/VideoTemplate";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import React from 'react'
import ReelsTemplate from "@/components/reels template/ReelsTemplate"
import ProfileTabs from "@/components/profile tabs/ProfileTabs"

const Videos = () => {
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;
  const navigateBack = () => router.back();

  return (
    <View>
      <VideoTemplate sourceIcon="camera-outline"
        title="Bro didnt see that coming at all"
        data="500mb"
        lengthOfVideo="0:01"
        isUserProfile={true}
        sourceStyle={styles.sourceStyle}
        floatStyle={styles.sourceStyle}
        wrapQualityData={styles.sourceStyle}
      />

      <VideoTemplate sourceIcon="camera-outline"
        title="Bro didnt see that coming at all"
        data="500mb"
        lengthOfVideo="0:01"
        isUserProfile={true}
        sourceStyle={styles.sourceStyle}
        floatStyle={styles.sourceStyle}
        wrapQualityData={styles.sourceStyle}
      />

    </View>
  )
}

export default Videos

const styles = StyleSheet.create({
  sourceStyle: {
    display: "none"
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
})