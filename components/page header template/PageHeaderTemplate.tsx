import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from "./PageHeaderTemplate.style"
import Button from "@/components/button template/Button"
import { Link } from 'expo-router';
import { View, StyleProp, Text, ViewStyle } from "react-native"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { FC, ReactNode, useState, useCallback} from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesome5 } from '@expo/vector-icons';


type Props = {
  style: StyleProp<ViewStyle>;
  isPageHeader: boolean
}

const PageHeaderTemplate: FC<Props> = ({ style, isPageHeader }) => {

  const colorScheme = useColorScheme()
  const [isActive, setIsActive] = useState(false)
  const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgDark;


  const navigateToMenuScreen = useCallback(() => {
    router.navigate("/menu")
  },[])
  
  const navigateToHistoryScreen = useCallback(() => {
    router.push("/history")
  },[])
   
   const navigateToDownloadScreen = useCallback(() => {
    router.push("/downloads")
  },[])
   

  return (
    <SafeAreaView style={[styles.container, bgStyle, style]}>


      {isPageHeader ?
        <View style={styles.wrap}>
          <View style={styles.logoIcon}>
            <FontAwesome5 name="play" size={18} color="white"
              style={[styles.icon]} />
          </View>
          <Text
          style={[styles.logoText, colorStyle]}>StreamTube </Text>
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

              <Button onClick={navigateToDownloadScreen} component={<Feather style={[styles.icon, colorStyle,
              styles.gap]} name="download"
                size={24} color="black" />} />

              <Button onClick={navigateToHistoryScreen} component={<Octicons style={[styles.icon, colorStyle, styles.gap]} name="history"
                size={24} color="black" />} />

              <Button onClick={navigateToMenuScreen} component={<AntDesign
              style={[styles.icon, colorStyle, styles.gap, styles.profile]}
              name="menuunfold"
                size={18} color="black" />} />

            </>
            : ""
        }
      </View>

    </SafeAreaView >
  )
}

export default PageHeaderTemplate