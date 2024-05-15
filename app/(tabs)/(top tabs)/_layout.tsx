import { 
  createMaterialTopTabNavigator,
MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap
} from '@react-navigation/material-top-tabs';
import {withLayoutContext} from "expo-router"
import {TabNavigationState, ParamListBase} from "@react-navigation/native"
import {Text} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import PageHeaderTemplate from "@/components/page header template/PageHeaderTemplate"
import {View, Dimensions} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import Button from "@/components/button template/Button"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {usePathname} from "expo-router"
import { AntDesign } from '@expo/vector-icons';

const {Navigator} = createMaterialTopTabNavigator();

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
  
  
  return(
    <>
    <SafeAreaView style={styles.container(colorScheme)}>

<PageHeaderTemplate/>   
</SafeAreaView>


<SafeAreaView style={styles.iconBox}>

{
route === "/" || route === "/folders" ?
<Button component={<MaterialCommunityIcons name="format-list-text"
color="white" style={styles.icon(colorScheme)} />}/>
 : <Button component={<AntDesign name="plussquareo" size={24} 
 style={styles.icon(colorScheme)} />}/>}
</SafeAreaView>

  <MaterialTopTab
  screenOptions={({ route }) => ({
    tabBarLabel: ({ focused, color }) => {
      let labelName;
      if (route.name === 'index') {
        labelName = 'VIDEOS';
      } else if (route.name === 'folders') {
        labelName = 'FOLDERS';
      } else if (route.name === 'playlists') {
        labelName = 'PLAYLISTS';
}
      return <Text style={{ color, fontFamily:"KanitRegular", fontSize: 12}}>{labelName}</Text>;
    },
  initialLayout:{
  width: Dimensions.get('window').width
},
    tabBarItemStyle: { width: 90},
    tabBarStyle: { backgroundColor: Colors[colorScheme ?? "light"].transparent,
    width:"100%"
    },
tabBarIndicatorStyle:{backgroundColor:"orangered"}
})}
  ></MaterialTopTab>

</>
    )
}

const screenWidth = Dimensions.get("screen").height

console.log(screenWidth)
const styles = StyleSheet.create({
  container: (colorScheme) => ({
    padding:0,
    backgroundColor: Colors[colorScheme ?? "light"].transparent,
  paddingHorizontal:10,
  paddingVertical:-10,
  paddingBottom:40
  }),
  iconBox:{
    position:"absolute",
    right:20,
    top:97,
    zIndex:1,
    display: screenWidth <  screenWidth / 2 ? "none" : "block"
  },
  icon: (colorScheme) => ({
    fontSize:18,
    color: Colors[colorScheme ?? "light"].tint
  })
})