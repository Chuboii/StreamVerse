import { StyleSheet, Text, View } from 'react-native'
import VideoTemplate from "@/components/video template/VideoTemplate";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import React from 'react'



const Downloads = () => {
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;
  const navigateBack = () => router.back();
  
  return (
    <View>
      <View style={styles.headWrap}>
        <Button
          onClick={navigateBack}
          component={
            <AntDesign
              name="arrowleft"
              size={24}
              style={[styles.icon, colorStyle]}
            />
          }
        />

        <ThemedText style={styles.text} darkColor="white" lightColor="black">
          {" "}
          Downloads{" "}
        </ThemedText>

<View style={styles.wrap}>
        <Button
          component={
            <MaterialCommunityIcons
              name="format-list-text"
              color="white"
              style={[styles.icon, colorStyle, styles.cog]}/>}/>
      
       <Button
          component={
            <AntDesign
              name="setting"
              size={24}
              style={[styles.icon, colorStyle]}
            />
          }
        />

      </View>
    </View>
    
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
    </View>
    
     </View>
  )
}

export default Downloads

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  headWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 20,
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
  wrap:{
    flexDirection:'row',
    alignItems:'center'
  },
  cog:{
    right:15
  },
  sourceStyle:{
    display:"none"
  }
})