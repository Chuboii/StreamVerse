import { StyleSheet, Image, Text, View } from 'react-native'

import { FontAwesome6 } from '@expo/vector-icons';

import Button from "@/components/button template/Button"
import React from 'react'
import { ThemedText } from "@/components/ThemedText"
import { ThemedView} from "@/components/ThemedView"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';


const StreamsTemplate = () => {
  const colorScheme = useColorScheme()
  const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgLight;
  
  return (
    <View style={styles.container}>
     <View style={styles.imageBox}>
     <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>
     <ThemedText style={styles.mins}>0:01</ThemedText>
     </View>
     
     <View style={styles.wrapper}>
     <View style={styles.wrap}>
     <Image style={styles.profile} source={require("../../assets/images/dummy.jpeg")}/>
     <View>
     <ThemedText style={styles.title}> How to make a great movie scene with Fx </ThemedText>
     <View style={styles.wrap}>
     <ThemedText style={styles.text}> Joe Doe </ThemedText>
     <ThemedText style={styles.text}> 1.9M view </ThemedText>
     <ThemedText style={styles.text}> 4 days ago </ThemedText>
     </View>
     </View>
     </View>
     <View style={styles.wrap}>
   <Button style={styles.iconBox} component={<FontAwesome6 name="download"
     style={[styles.icon, colorStyle, styles.download]} size={20} color="white"  />} />
     <Button style={styles.iconBox} component={<FontAwesome6 name="ellipsis-vertical"
     style={[styles.icon, colorStyle]} size={20} color="white"  />} />
     </View>
     </View>
    </View>
  )
}

export default StreamsTemplate

const styles = StyleSheet.create({
  container:{
    padding:0,
    marginVertical:10
  },
  imageBox:{
    height:200
  },
  image:{
    width:"100%",
    height:"100%",
  },
  mins:{
    position:"absolute",
    right:10,
    bottom:10,
    backgroundColor:"rgba(0,0,0,.4)",
    padding:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  wrapper:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10,
    alignItems:"center"
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  wrap:{
    flexDirection:"row",
    alignItems:"center"
  },
  text:{
    fontFamily:"KanitRegular",
    fontSize:12,
    color:"gray"
  },
  title:{
    fontFamily:"KanitRegular",
    fontSize:14
  },
  profile:{
    width:40,
    height:40,
    borderRadius:50,
    marginRight:10
  },
  iconBox:{
    marginLeft:20
  },
  download:{
    fontSize:19
  }
})