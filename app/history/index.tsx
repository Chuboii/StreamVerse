import { StyleSheet,BackHandler,TextInput, Text, View } from 'react-native'
import React, {useEffect,useCallback, useState} from 'react'
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView} from "@/components/ThemedView"
import VideoTemplate from "@/components/video template/VideoTemplate"
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from "@/components/button template/Button"
import {router, usePathname} from "expo-router"
import ReelsTemplate from "@/components/reels template/ReelsTemplate"
import { Octicons } from '@expo/vector-icons';
const History = () => {
  const colorScheme = useColorScheme()
  const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgLight;
  const pathname = usePathname()
  const [isNavigated, setIsNavigated] = useState(false)
  
  const navigateBack = () => router.push("/")
 
  const navigateToOnlineHistory = () => {
   setIsNavigated(true)
   router.navigate("/history")
  }
  
  const navigateToLocalHistory = () =>{
   setIsNavigated(true)
    router.push("/history/local")
  }
  console.log(isNavigated)

  return (
    <View>
       <View style={styles.header}>
        <Button onClick={navigateBack} component={<AntDesign name="arrowleft" size={24}
          style={[styles.icon, colorStyle]} />} />
    <ThemedText style={styles.title}> History </ThemedText>
<Octicons name="multi-select" size={24} color="white" />
      </View>
      
      <ThemedView style={styles.btnWrapper}>
      <Button disabled={isNavigated} onClick={navigateToOnlineHistory} style={pathname === "/history" ? styles.btnStyleActive :
     styles.btnStyle} component={<ThemedText
      style={styles.btnText}> Online</ThemedText>}/>
     <Button onClick={navigateToLocalHistory} style={pathname === "/local" ? styles.btnStyleActive :
     styles.btnStyle} component={<ThemedText
     style={styles.btnText}> Local</ThemedText>}/>
      </ThemedView>
      
      
      <View style={styles.wrapper}>
      <ReelsTemplate 
      imageStyle={styles.reelImageStyle}
      titleStyle={styles.reelTitleStyle}
      containerStyle={styles.reelContainerStyle}
      />
      <ReelsTemplate 
      imageStyle={styles.reelImageStyle}
      titleStyle={styles.reelTitleStyle}
      containerStyle={styles.reelContainerStyle}
      />
      </View>
      
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
    
          <View style={styles.wrapper}>
      <ReelsTemplate 
      imageStyle={styles.reelImageStyle}
      titleStyle={styles.reelTitleStyle}
      containerStyle={styles.reelContainerStyle}
      />
      <ReelsTemplate 
      imageStyle={styles.reelImageStyle}
      titleStyle={styles.reelTitleStyle}
      containerStyle={styles.reelContainerStyle}
      />
      </View>
      
      </View>
      
    </View>
  )
}

export default History

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
  header:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    padding:10,
    paddingVertical:15
  },
  title: {
    fontFamily: "KanitBold",
    fontSize: 20,
    
  },
  hideDisplay:{
    display:"none"
  },
  titleStyle:{
    fontSize:16,
    fontFamily:"KanitRegular"
  },
  containerStyle:{
    alignItems:"center",
    
  },
  reelContainerStyle:{
    width:120
  },
  reelImageStyle:{
  height:170,
    width:120  
  },
  reelTitleStyle:{
    fontSize:12
  },
  btnWrapper:{
    flexDirection:"row",
    paddingVertical:5,
    marginHorizontal:10,
    borderRadius:10,
    marginTop:20
  },
  btnStyle:{
    justifyContent:"center",
    flex:1,
    borderRadius:10,
    marginHorizontal:7,
    paddingVertical:13,
    backgroundColor:"transparent"
  },
  btnStyleActive:{
    backgroundColor:"rgba(255,255,255,.3)",
    flex:1,
    borderRadius:10,
    marginHorizontal:7,
    paddingVertical:13
  },
  btnText:{
    textAlign:"center",
    fontFamily:"KanitRegular"
  }
})