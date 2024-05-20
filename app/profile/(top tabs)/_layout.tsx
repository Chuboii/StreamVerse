import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from "expo-router"
import { TabNavigationState, ParamListBase } from "@react-navigation/native"
import { Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import PageHeaderTemplate from "@/components/page header template/PageHeaderTemplate"
import { View, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "@/components/button template/Button"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { usePathname } from "expo-router"
import { AntDesign } from '@expo/vector-icons';
import {useCallback} from "react"
import {router} from "expo-router"


const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTab = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator)


const screenHeight = Dimensions.get("window").height


export default function Layout() {
  const colorScheme = useColorScheme()
  const route = usePathname()
  const colorStyle = colorScheme === 'light' ? styles.iconLight :
  styles.iconDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgDark;

const navigateToSearchScreen = useCallback(() => {
    router.push("/search")
  },[])
  

  return (
    <>
      <SafeAreaView style={[styles.container, bgStyle]}>
      <View style={styles.headWrap}>
       <Button
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
<View style={styles.imageBox}>
<Image style={styles.image} source={require("../../../assets/images/dummy.jpeg")}/>
</View>

<View style={styles.box}>
<ThemedText style={[styles.text, styles.name]}> Joe Doe </ThemedText>
<View style={styles.wrap}>
<ThemedText style={[styles.text, styles.text1]}> 100 following </ThemedText>
<ThemedText style={[styles.text, styles.text1]}> 100 followers </ThemedText>
</View>

<View style={[styles.wrap, styles.btn]}>
<Button style={styles.btnWrap} component={<ThemedText style={styles.btnText}> Edit Profile </ThemedText>}/>
<Button style={styles.btnWrap} component={<ThemedText style={styles.btnText}> Share Profile </ThemedText>}/>
</View>
  
</View>
</View>
<ThemedText style={styles.bio}> This is my bio </ThemedText>
      </SafeAreaView>
  
      <MaterialTopTab
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused, color }) => {
            let labelName;
            if (route.name === 'index') {
              labelName = 'VIDEOS';
            } else if (route.name === 'folders') {
              labelName = 'FOLDERS';
            } else if (route.name === 'reels') {
              labelName = 'REELS';
            }
            return <Text style={{ color, fontFamily: "KanitRegular", fontSize: 12 }}>{labelName}</Text>;
          },
          initialLayout: {
            width: Dimensions.get('window').width
          },
         // tabBarItemStyle: { width: 90 },
          tabBarStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].transparent,
            width: "100%"
          },
          tabBarIndicatorStyle: { backgroundColor: "orangered" }
        })}
      ></MaterialTopTab>

    </>
  )
}

const screenWidth = Dimensions.get("screen").height

const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingHorizontal: 5,
    paddingVertical: -10,
    paddingBottom: 30,
    paddingTop:10,
  },
  iconBox: {
    position: "absolute",
    right: 20,
    top: 174,
    zIndex: 1,
  },
  icon: {
    fontSize: 18,
  },
  iconLight: {
    color: Colors.light.tint,
  },
  iconDark: {
    color: Colors.dark.tint,
  },
  bgDark: {
    backgroundColor: Colors.dark.transparent,
  },
  bgLight: {
    backgroundColor: Colors.light.transparent
  },
  wrapper:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    marginBottom:15
  },
  imageBox:{
    width:110,
    height:110,
    marginRight:20
  },
  image:{
    width:"100%",
    height:"100%",
    borderRadius:50
  },
  wrap:{
    flexDirection:"row"
  },
  box:{
    
  },
  bio:{
    textAlign:"center",
    fontFamily:"KanitRegular",
    justifyContent:"center",
    flexDirection:"row",
    marginVertical:15
  },
  text:{
    fontFamily:"KanitRegular",
    marginVertical:3,
    marginRight:10,
    textTransform:"capitalize"
    
  },
  btnText:{
    fontFamily:"KanitRegular"
  },
  btn:{
    marginVertical:10
  },
  btnWrap:{
    padding:10,
    borderRadius:10,
    backgroundColor:"rgba(255,255,255,.1)",
    marginRight:10
  },
  headWrap:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:20
  },
  name:{
    fontSize:20
  }
})