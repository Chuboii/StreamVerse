import { StyleSheet, BackHandler, TextInput, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import VideoTemplate from "@/components/video template/VideoTemplate"
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from "@/components/button template/Button"
import { router, usePathname } from "expo-router"
import ReelsTemplate from "@/components/reels template/ReelsTemplate"
import { Octicons } from '@expo/vector-icons';
const LocalHistory = () => {
  const colorScheme = useColorScheme()
  const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgLight;
  const pathname = usePathname()
  const [isNavigated, setIsNavigated] = useState(false)



  const navigateBack = () => router.push("/")


  const navigateToLocalHistory = () => {
    setIsNavigated(true)
    router.navigate("/history/local")
  }

  const navigateToOnlineHistory = () => {
    setIsNavigated(true)
    router.navigate("/history")
  }


  return (
    <View>
      <View style={styles.header}>
        <Button disabled={false} onClick={navigateBack} component={<AntDesign name="arrowleft" size={24}
          style={[styles.icon, colorStyle]} />} />
        <ThemedText style={styles.title}> History </ThemedText>
        <Octicons name="multi-select" size={24} color="white" />
      </View>

      <ThemedView style={styles.btnWrapper}>
        <Button disabled={false} onClick={navigateToOnlineHistory} style={pathname === "/history" ? styles.btnStyleActive :
          styles.btnStyle} component={<ThemedText
            style={styles.btnText}> Online</ThemedText>} />
        <Button disabled={isNavigated} onClick={navigateToLocalHistory} style={pathname === "/history/local" ? styles.btnStyleActive :
          styles.btnStyle} component={<ThemedText
            style={styles.btnText}> Local</ThemedText>} />
      </ThemedView>



      <View>
        <VideoTemplate sourceIcon="camera-outline"
          title="Bro didnt see that coming at all"
          containerStyle={styles.containerStyle}
          lengthOfVideo="0:01"
          wrapStyle={styles.hideDisplay}
          floatStyle={styles.hideDisplay}
          titleStyle={styles.titleStyle}
        />

        <VideoTemplate sourceIcon="camera-outline"
          title="Bro didnt see that coming at all"
          containerStyle={styles.containerStyle}
          lengthOfVideo="0:01"
          wrapStyle={styles.hideDisplay}
          floatStyle={styles.hideDisplay}
          titleStyle={styles.titleStyle}
        />


      </View>

    </View>
  )
}

export default LocalHistory

const styles = StyleSheet.create({
  icon: {
    marginRight: 20
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
  input: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    fontFamily: "KanitRegular",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingVertical: 15
  },
  title: {
    fontFamily: "KanitBold",
    fontSize: 20,

  },
  hideDisplay: {
    display: "none"
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: "KanitRegular"
  },
  containerStyle: {
    alignItems: "center",

  },
  btnWrapper: {
    flexDirection: "row",
    paddingVertical: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    marginTop: 20
  },
  btnStyle: {
    justifyContent: "center",
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 7,
    paddingVertical: 13,
    backgroundColor: "transparent"
  },
  btnStyleActive: {
    backgroundColor: "rgba(255,255,255,.3)",
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 7,
    paddingVertical: 13
  },
  btnText: {
    textAlign: "center",
    fontFamily: "KanitRegular"
  }
})