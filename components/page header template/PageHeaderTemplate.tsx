import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {styles} from "./PageHeaderTemplate.style"
import Button from "@/components/button template/Button"
import { Link } from 'expo-router';
import {View, StyleProp,Text, ViewStyle} from "react-native"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Fc, {ReactNode, useState} from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {router} from "expo-router"
import {SafeAreaView} from "react-native-safe-area-context"
import { FontAwesome5 } from '@expo/vector-icons';


type Props = {
  rightIcon1: ReactNode;
  rightIcon2: ReactNode;
rightIcon3: ReactNode;
style: StyleProp<ViewStyle>;
isPageHeader:boolean
}

const PageHeaderTemplate: FC<Props> = ({rightIcon1, rightIcon2,  rightIcon3, style, isPageHeader= true}) => {
  const colorScheme = useColorScheme()
  const [isActive, setIsActive] = useState(false)
  
  
  const navigateToSearchScreen = () => {
    router.push("/search")
  }
  
  
  
  return (
    <SafeAreaView style={[styles.container(colorScheme), style]}>
    
    
   {isPageHeader ? 
   <View style={styles.wrap}> 
   <View style={styles.logoIcon}>
   <FontAwesome5 name="play" size={18} color="white"
   style={[styles.icon]}/>
   </View>
   <Text style={styles.logoText(colorScheme)}>StreamTube </Text>
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
      <Button onClick={navigateToSearchScreen} component={ <AntDesign style={styles.icon(colorScheme, 20)} name="search1"
    size={24} color="black" />}/>

<Button component={ <Octicons style={styles.icon(colorScheme,20)}name="history"
size={24} color="black" />} />

         <Button component={<Feather style={styles.icon(colorScheme)} name="download"
   size={24} color="black" />} />

    </>
    : ""
    }
    </View>
    
    </SafeAreaView>
    )
}

export default PageHeaderTemplate