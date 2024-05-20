import { StyleSheet,FlatList, ScrollView, Text, View } from 'react-native'



import VideoTemplate from "@/components/video template/VideoTemplate";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import React, {useState} from 'react'
import ReelsTemplate from "@/components/reels template/ReelsTemplate"
import ProfileTabs from "@/components/profile tabs/ProfileTabs"
import BottomPrompt from "@/components/prompt/bottom prompt/BottomPrompt"

const dbDemo = [
{
  id:0,
  icon: "person-outline",
  name: "Profile",
  isIcon: true
},
  {
  id:1,
  icon: "bookmark-outline",
  name: "Favorite",
  isIcon: true
},
  {
  id:2,
  icon: "download-outline",
  name: "Downloads",
  isIcon: true
},
  {
  id:3,
  icon: "moon-outline",
  name: "Dark Mode",
  isIcon:false
},
  {
  id:4,
  icon: "document-text-outline",
  name: "Feedback",
  isIcon:true
},
  {
  id:5,
  icon: "star-outline",
  name: "Rate our app",
  isIcon: true
}
]
const Menu = () => {
  const [enableBottomPromptComp, setEnableBottomPromptComp] = useState(false)
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;
  const navigateBack = () => router.back();
  
  const navigateToIndexScreen = (name: string) => {

    switch(name){
      case "Profile":
        return router.navigate("/profile/(top tabs)")
    case "Favorite":
       return router.navigate("/favorites")
    case "Downloads":
       return router.navigate("/downloads")
    case "Feedback":
       return router.navigate("/feedback")
    case "Rate our app":
      return setEnableBottomPromptComp(true)
     default:
        return null
    }
  }
  return (
    <View style={styles.container}>
    {enableBottomPromptComp && <BottomPrompt/>}
      <View style={styles.headWrap}>
       <Button
       onClick={navigateBack}
          component={
            <AntDesign
              name="arrowleft"
              size={27}
              style={[styles.headerIcon, colorStyle]}
            />
          }
        />
       <Button
          component={
            <AntDesign
              name="setting"
              size={27}
              style={[styles.headerIcon, colorStyle]}
            />
          }
        />
</View>
<View style={styles.wrapper}>
      <View style={styles.wrap}>
       <Button
          component={
            <AntDesign
              name="clockcircleo"
              size={27}
              style={[styles.icon, colorStyle]}
            />
          }
        />
        <ThemedText style={styles.text}> History </ThemedText>
    
</View>

<ScrollView horizontal>
        <ReelsTemplate 
        wrapStyle={styles.wrapStyle}
        titleBox={styles.titleBoxStyle} titleStyle={styles.titleStyle}
        imageStyle={styles.imageStyle}
        containerStyle={styles.containerStyle}
        />
              <ReelsTemplate 
        wrapStyle={styles.wrapStyle}
        titleBox={styles.titleBoxStyle} titleStyle={styles.titleStyle}
        imageStyle={styles.imageStyle}
        containerStyle={styles.containerStyle}
        />
        <ReelsTemplate 
        wrapStyle={styles.wrapStyle}
        titleBox={styles.titleBoxStyle} titleStyle={styles.titleStyle}
        imageStyle={styles.imageStyle}
        containerStyle={styles.containerStyle}
        />
                <ReelsTemplate 
        wrapStyle={styles.wrapStyle}
        titleBox={styles.titleBoxStyle} titleStyle={styles.titleStyle}
        imageStyle={styles.imageStyle}
        containerStyle={styles.containerStyle}
        />
        <ReelsTemplate 
        wrapStyle={styles.wrapStyle}
        titleBox={styles.titleBoxStyle} titleStyle={styles.titleStyle}
        imageStyle={styles.imageStyle}
        containerStyle={styles.containerStyle}
        />
</ScrollView>
</View>

<View style={styles.gap}>
<FlatList 
data={dbDemo}
keyExtractor={data => data.id}
renderItem={({item}) => <ProfileTabs handleClick={() =>
navigateToIndexScreen(item.name)} text={item.name} icon={item.icon}
isIcon={item.isIcon}
/>}
/>
</View>

</View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  icon: {
    fontSize: 18,
    marginRight:7 
  },
  headerIcon:{
    fontSize:27
  },
  headWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 10,
    
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 14,
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  wrap:{
    flexDirection:'row',
    alignItems:'center',
    padding:10
  },
  cog:{
    right:15
  },
  titleBoxStyle:{
    position:"absolute",
    bottom:12,
    left:2
  },
  wrapStyle:{
    display:"none"
  },
  titleStyle:{
    fontSize:10
  },
  imageStyle:{
    width:100,
    height:150,
  },
  containerStyle:{
    width:100,
    height:150,
    margin:5
  },
  gap:{
    marginVertical:40
  },
  wrapper:{
    marginTop:43
  }
})