import { StyleSheet,FlatList, ScrollView, Text, View, Image, Dimensions } from 'react-native'

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

const screenWidth = Dimensions.get("window").width

const Reels = () => {
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;
  const navigateBack = () => router.back();
  
  return (
    <View style={styles.box}>
<View style={styles.wrapper}>
<ReelsTemplate
titleStyle={styles.titleStyle}
imageStyle={styles.imageStyle}
containerStyle={styles.containerStyle}
textStyle={styles.textStyle}
iconStyle={styles.iconStyle}
wrapStyle={styles.wrapStyle}
/>
<ReelsTemplate
titleStyle={styles.titleStyle}
imageStyle={styles.imageStyle}
containerStyle={styles.containerStyle}
textStyle={styles.textStyle}
iconStyle={styles.iconStyle}
wrapStyle={styles.wrapStyle}
/>
<ReelsTemplate
titleStyle={styles.titleStyle}
imageStyle={styles.imageStyle}
containerStyle={styles.containerStyle}
textStyle={styles.textStyle}
iconStyle={styles.iconStyle}
wrapStyle={styles.wrapStyle}
/>
</View>
<View style={styles.wrapper}>
<ReelsTemplate
titleStyle={styles.titleStyle}
imageStyle={styles.imageStyle}
containerStyle={styles.containerStyle}
textStyle={styles.textStyle}
iconStyle={styles.iconStyle}
wrapStyle={styles.wrapStyle}
/>
<ReelsTemplate
titleStyle={styles.titleStyle}
imageStyle={styles.imageStyle}
containerStyle={styles.containerStyle}
textStyle={styles.textStyle}
iconStyle={styles.iconStyle}
wrapStyle={styles.wrapStyle}
/>
<ReelsTemplate
titleStyle={styles.titleStyle}
imageStyle={styles.imageStyle}
containerStyle={styles.containerStyle}
textStyle={styles.textStyle}
iconStyle={styles.iconStyle}
wrapStyle={styles.wrapStyle}
/>
</View>
</View>
  )
}

export default Reels

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:"row",
    alignItems:"center"
  },
  titleStyle:{
    display:"none"
  },
  imageStyle:{
    width: screenWidth / 3,
    height:180,
    padding:10,
    paddingHorizontal:5
  },
  box:{
    
  },
  containerStyle:{
    margin:0,
    padding:0,
    width:screenWidth / 3
  },
  textStyle:{
    fontSize:12,
    textTransform:"lowercase"
  },
  wrapStyle:{
    marginHorizontal:5,
    marginVertical:6
  },
  iconStyle:{
    fontSize:11
  }
})