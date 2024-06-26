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
import { useCallback } from "react"
import { router } from "expo-router"


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
  }, [])


  return (
    <>
      <SafeAreaView style={[styles.container, bgStyle]}>

        <PageHeaderTemplate style={{}} isPageHeader={true} />
      </SafeAreaView>

      <SafeAreaView>
        <Button disabled={false} onClick={navigateToSearchScreen} component={
          <ThemedView style={styles.inputWrapper}>
            <AntDesign style={[styles.inputIcon, colorStyle]} name="search1" size={24} color="black" />
          </ThemedView>} />
      </SafeAreaView>
      <SafeAreaView style={styles.iconBox}>

        {
          route === "/" || route === "/folders" ?
            <Button disabled={false} component={<MaterialCommunityIcons name="format-list-text"
              color="white" style={[styles.icon, colorStyle]} />} />
            : <Button disabled={false} component={<AntDesign name="plussquareo" size={24}
              style={[styles.icon, colorStyle]} />} />}
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
            return <Text style={{ color, fontFamily: "KanitRegular", fontSize: 12 }}>{labelName}</Text>;
          },
          initialLayout: {
            width: Dimensions.get('window').width
          },
          tabBarItemStyle: { width: 90 },
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
    paddingTop: 10,
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
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 15
  },
  inputIcon: {

    borderRadius: 7,
    fontSize: 25,

  }
})