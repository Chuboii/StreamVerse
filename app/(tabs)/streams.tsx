import { StyleSheet, Image, ScrollView, Text, View } from 'react-native'
import React, { useRef, useCallback } from 'react'
import VideoTemplate from "@/components/video template/VideoTemplate";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import StreamsCategory from "@/components/streams category/StreamsCategory"
import StreamsTemplate from "@/components/streams template/StreamsTemplate"
import ReelsTemplate from "@/components/reels template/ReelsTemplate"
import { useScrollToTop } from '@react-navigation/native';
import StreamsMinimizedPreview from "@/components/streams minimized preview/StreamsMinimizedPreview"


const streams = () => {
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;
  const ref = useRef(null)
  useScrollToTop(ref)

  const navigateToSearchScreen = useCallback(() => {
    router.navigate("/search")
  }, [])

  const navigateToProfileScreen = useCallback(() => {
    router.navigate("/profile/(top tabs)")
  }, [])

  const navigateToStreamsDetailsScreen = () => {
    router.push({
      pathname: "/streams-video-details/677"
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StreamsMinimizedPreview handleClick={navigateToStreamsDetailsScreen} />
      <View style={styles.headWrap}>

        <Text style={[styles.title, colorStyle]}> Streams</Text>
        <View style={styles.wrap}>
          <Button disabled={false} onClick={navigateToSearchScreen} component={
            <AntDesign name="search1" style={[styles.icon, colorStyle]} />
          } />

          <Button disabled={false} style={styles.profileBox} onClick={navigateToProfileScreen} component={
            //When there is no user
            /*  <AntDesign name="user" size={17} style={[colorStyle]}/>*/
            <Image source={require("../../assets/images/dummy.jpeg")}
              style={styles.profile} />

          } />


        </View>
      </View>

      <View style={styles.wrap}>
        <StreamsCategory />
        <StreamsCategory />
        <StreamsCategory />
        <StreamsCategory />
      </View>

      <ScrollView ref={ref}>
        <ScrollView style={styles.wrapper} horizontal>
          <ReelsTemplate wrapStyle={styles.wrapStyle}
            titleBox={styles.titleBoxStyle} titleStyle={styles.titleStyle} />
          <ReelsTemplate wrapStyle={styles.wrapStyle} titleStyle={styles.titleStyle} titleBox={styles.titleBoxStyle} />
          <ReelsTemplate wrapStyle={styles.wrapStyle}
            titleBox={styles.titleBoxStyle} titleStyle={styles.titleStyle} />
          <ReelsTemplate wrapStyle={styles.wrapStyle}
            titleStyle={styles.titleStyle} titleBox={styles.titleBoxStyle} />
        </ScrollView>


        <StreamsTemplate />
        <StreamsTemplate />
        <StreamsTemplate />
        <StreamsTemplate />
      </ScrollView>
    </SafeAreaView>
  )
}


export default streams

const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
    flex: 1
  },
  icon: {
    fontSize: 20,
    marginLeft: 15,

  },
  headWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 20,
    alignItems: "center"
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 19,
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 25,
    fontFamily: "KanitRegular",
    borderColor: 'orangered',
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  titleBoxStyle: {
    position: "absolute",
    bottom: 12,
    left: 2
  },
  wrapStyle: {
    display: "none"
  },
  titleStyle: {
    fontSize: 10,
    paddingHorizontal: 5
  },
  wrapper: {
    marginBottom: 15
  },
  profile: {
    width: "100%",
    height: "100%",
    borderRadius: 50
  },
  profileBox: {
    width: 30,
    height: 30,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center"
  }
})