import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from "./PageHeaderTemplate.style"
import Button from "@/components/button template/Button"
import { Link } from 'expo-router';
import { View, StyleProp, Text, ViewStyle } from "react-native"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { FC, ReactNode, useState } from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesome5 } from '@expo/vector-icons';


type Props = {
  rightIcon1: ReactNode;
  rightIcon2: ReactNode;
  rightIcon3: ReactNode;
  style: StyleProp<ViewStyle>;
  isPageHeader: boolean
}

const PageHeaderTemplate: FC<Props> = ({ style, isPageHeader }) => {

  const colorScheme = useColorScheme()
  const [isActive, setIsActive] = useState(false)
  const colorStyle = colorScheme === 'light' ? styles.iconLight : styles.iconDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgDark;


  const navigateToSearchScreen = () => {
    router.push("/search")
  }



  return (
    <SafeAreaView style={[styles.container, bgStyle, style]}>


      {isPageHeader ?
        <View style={styles.wrap}>
          <View style={styles.logoIcon}>
            <FontAwesome5 name="play" size={18} color="white"
              style={[styles.icon]} />
          </View>
          <ThemedText lightColor='black' darkColor='white' style={styles.logoText}>StreamTube </ThemedText>
        </View>
        /*<ThemedView style={styles.wrap(colorScheme)}>
         <Button component={
         <View style={styles.selected(colorScheme, 15)}>
         <Ionicons name="logo-youtube" size={20}
         style={styles.icon(colorScheme)}/>
           </View>
         }/>
        <Button component={
        <Ionicons name="musical-notes" size={20}
         style={styles.selected(colorScheme)}/>}/>
         </ThemedView>*/
        :
        ""
      }



      <View style={styles.wrapper}>
        {
          isPageHeader ?
            <>
              <Button onClick={navigateToSearchScreen} component={<AntDesign style={[styles.icon, colorStyle]} name="search1"
                size={24} color="black" />} />

              <Button component={<Octicons style={[styles.icon, colorStyle]} name="history"
                size={24} color="black" />} />

              <Button component={<Feather style={[styles.icon, colorStyle]} name="download"
                size={24} color="black" />} />

            </>
            : ""
        }
      </View>

    </SafeAreaView >
  )
}

export default PageHeaderTemplate