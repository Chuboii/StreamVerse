import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from "react-native-safe-area-context"
import { Text,TouchableOpacity, Image, TextInput, ScrollView, View, StyleSheet } from "react-native"
import { useLocalSearchParams, router } from "expo-router"
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from "@/components/button template/Button"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  imageUrl: string;
  title: string;
  name:string;
  handleClick: () => void;
}
const StreamsMinimizedPreview = ({imageUrl, title, name, handleClick}) : Prop => {
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;
    
    
  return(
    <ThemedView style={styles.container}>
    <TouchableOpacity onPress={handleClick} style={styles.wrap}>
    <View style={styles.imageBox}>
    <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>
    </View>
    <View style={styles.box}>
    <ThemedText style={[styles.text, styles.title]}> How to be a billionaire </ThemedText>
    <ThemedText style={[styles.text, styles.textActive]}> Joe doe </ThemedText>
    </View>
    <View style={styles.wrap}>
    <FontAwesome5 name="play" style={[styles.icon, colorStyle]} size={30} color="black" />

    <AntDesign name="close" size={24} style={[styles.icon, colorStyle,
    styles.cancel]}/>
    </View>
    </TouchableOpacity>
    </ThemedView>
    )
}

export default StreamsMinimizedPreview

const styles = StyleSheet.create({
  container:{
    position:"absolute",
    bottom:0,
    width:"100%",
    zIndex:10,
    flexDirection:"row",
    height:80,
    alignItems:"center",
    elevation:50
  },
  imageBox:{
    flex:1.5,
    
  },
  image:{
    width:"100%",
    height:"100%"
  },
  text:{
    fontFamily:"KanitRegular",
  },
  icon:{
    
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  box:{
    flex:2,
    marginLeft:10,
  
  },
  wrap:{
    flexDirection:"row",
    right:10,
    alignItems:"center"
  },
  icon:{
    marginLeft:25,
    fontSize:20
  },
  cancel:{
    fontSize:25
  },
  textActive:{
    fontSize:14,
    color:"gray"
  }
})