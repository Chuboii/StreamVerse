import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from "@/components/button template/Button"
import { Link } from 'expo-router';
import {View, StyleSheet,Text,Image, ViewStyle} from "react-native"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Fc, {ReactNode, useState} from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import {SafeAreaView} from "react-native-safe-area-context"
import { FontAwesome } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';



const ReelsTemplate = () => {
  
  
  return (
    <View style={styles.container}>
    <View style={styles.imageBox}>
    <Image style={styles.img} source={require("../../assets/images/dummy.jpeg")} />
       <LinearGradient
     colors={['rgba(255,255,255,0)', "rgba(0,0,0,.6)"]}
       style={styles.wrapper}>
       <View style={styles.wrap}>
        <FontAwesome style={styles.icon} name="eye" size={24} color="white" />
    <ThemedText style={styles.text} lightTheme="black" darkTheme="white">4m
    Views </ThemedText>
    </View>
    </LinearGradient>
    </View>
   <View>
   <ThemedText numberOfLines={2} style={styles.title} lightTheme="black"
   darkTheme="white"> This shhd hdhf fhdhd jdbd uxhdhdhd hdhd dhd dhd 
   reel is so good #fyp #bomb</ThemedText>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    width:150,
    margin:10
  },
  imageBox:{
    width:150,
    height:215
  },
  img:{
    width:"100%",
    height:"100%",
    borderRadius:10
  },
  icon:{
    fontSize:14
  },
  text:{
    fontFamily:"KanitRegular",
    marginLeft:5,
    fontSize:14
  },
  title:{
fontFamily:"KanitRegular",
fontSize:14,
top:10
  },
  wrapper:{
    position:"absolute",
    bottom:0,
    flexDirection:"row",
    left:0,
    alignItems:"center",
    width:"100%",
    padding:5,
    height:"40%",
    alignItems:"flex-end"
  },
  wrap:{
    flexDirection:"row",
    alignItems:"center"
  }
})
export default ReelsTemplate