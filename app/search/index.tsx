import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import {SafeAreaView} from "react-native-safe-area-context"
import {Text,TextInput,ScrollView, View, StyleSheet} from "react-native"
import {useLocalSearchParams, router} from "expo-router"
import { AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import Button from "@/components/button template/Button"
import ReelsTemplate from "@/components/reels template/ReelsTemplate"
import {ThemedText} from "@/components/ThemedText"
import VideoTemplate from "@/components/video template/VideoTemplate"
export default function SearchPage() {
  const colorScheme = useColorScheme()
  
  
  const navigateBack = () => router.back()

  return (
    <SafeAreaView>
    <View style={styles.wrapper}>
<Button onClick={navigateBack} component={<AntDesign name="arrowleft" size={24} 
 style={styles.icon(colorScheme)} />}/>
    <TextInput
    style={styles.input(colorScheme)}
    placeholder="Search videos here"
    autoFocus
    placeholderTextColor= {Colors[colorScheme ?? "light"].tint}
    />
    
    </View>

<ThemedText style={styles.headerTitle}> Reels </ThemedText>
    <ScrollView horizontal>
<ReelsTemplate/>
<ReelsTemplate/>
<ReelsTemplate/>
</ScrollView>
 
 
<ThemedText style={styles.headerTitle}> Local videos </ThemedText>

<View>
        <VideoTemplate sourceIcon="camera-outline"
    title="Bro didnt shhsj dhhs hdbee that coming at all"
   quality="1080p"
  lengthOfVideo="0:01"
  data="1.1 GB"
  source="Camera"
  sourceStyle={styles.sStyles}
  floatStyle={styles.fStyles}
  wrapStyle={styles.wStyles}
  containerStyle={styles.cStyles}
    />
</View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  icon:(colorScheme)=>({
    color: Colors[colorScheme ?? "light"].tint
 ,
 marginRight:20
  }),
  input: (colorScheme) => ({
    backgroundColor:Colors[colorScheme ?? "light"].gray,
    flex:1,
    borderRadius:10,
    padding:10,
    fontFamily:"KanitRegular",
    color:Colors[colorScheme ?? "light"].tint
   }),
  wrapper:{
    flexDirection:"row",
    alignItems:"center",
    padding:10
  },
  headerTitle:{
    padding:10,
    fontFamily:"KanitBold",
    fontSize:25,
    marginTop:20
  }
})