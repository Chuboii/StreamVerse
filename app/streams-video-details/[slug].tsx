import { StyleSheet,TextInput,ScrollView, Text, Image,View } from 'react-native'

import VideoTemplate from "@/components/video template/VideoTemplate";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import React from 'react'
import StreamsVideo from "@/components/streams video/StreamsVideo"
import StreamsTemplate from "@/components/streams template/StreamsTemplate"
import Comment from "@/components/comments/Comment"
const StreamsVideoDetails = () => {
  const colorScheme = useColorScheme()
  const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgLight;

  return (
    <SafeAreaView style={styles.container}>
   <Comment/>
    <StreamsVideo/>
    <ScrollView style={styles.wrapper}>
  <View style={styles.pad}>
    <ThemedText style={[styles.text,styles.title]}> How to be a millionaire </ThemedText>
    <View style={styles.wrap}>
        <ThemedText style={styles.text}> 55k views</ThemedText>
    <ThemedText style={styles.text}> 2y ago </ThemedText>
    </View>
   <View style={styles.wrapBox}>
    <View style={styles.wrap}>
   <Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>
   <View>
    <ThemedText style={[styles.text, styles.name]}> Joe Doe </ThemedText>
    <ThemedText style={[styles.text, styles.name, styles.fText]}> 55k followers </ThemedText>
  </View>
    </View>
    <Button style={styles.btn} component={<ThemedText style={[styles.text,
    styles.btnText]}> Follow </ThemedText>}/>
    </View>
    
    
    <View style={styles.wrap}>
    <Button style={styles.iconBox} component={
    <View style={styles.wrap}>
    <AntDesign style={styles.icon} name="like2" size={24} color="white" />
  <ThemedText style={styles.text}> 55 </ThemedText>
  </View>
    }/>
    <Button style={styles.iconBox} component={
    <View style={styles.wrap}>
    <AntDesign style={styles.icon} name="sharealt" size={24} color="white" />
    <ThemedText style={styles.text}> 55 </ThemedText>
     </View>
    }/>
  
  </View>
  <View style={styles.comment}>
  <View style={[styles.wrap, styles.wrapComment]}>
  <ThemedText style={[styles.text, styles.textComment]}>Comments</ThemedText>
  <ThemedText style={[styles.text, styles.textComment]}>55</ThemedText>
</View>

<View style={styles.wrap}>
<Image style={styles.commentImg} source={require("../../assets/images/dummy.jpeg")}/>
<TextInput style={styles.input} placeholderTextColor="rgba(255,255,255,.4)"
placeholder="Add a comment" readOnly/>
</View>
  </View>
  </View>
    <View>
            <StreamsTemplate/>
          <StreamsTemplate/>
            <StreamsTemplate/>
          <StreamsTemplate/>
    </View>
    </ScrollView>
    </SafeAreaView>
    )
}

export default StreamsVideoDetails

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  wrapper:{
  marginTop:10
  },
  wrap:{
    flexDirection:"row",
    alignItems:"center"
  },
  iconBox:{
    backgroundColor:"rgba(255,255,255,.2)",
    marginRight:10,
    padding:5,
    paddingHorizontal:20,
    borderRadius:30
  
  },
  icon:{
    fontSize:15,
    marginRight:5
  },
  comment:{
  marginVertical:20,
  backgroundColor:"rgba(255,255,255,.2)",
  borderRadius:10,
  padding:15
  },
  input:{
    color:"white",
    fontFamily:"KanitRegular",
    flex:1
  },
  image:{
    width:50,
    height:50,
    borderRadius:50
  },
  commentImg:{
  width:30,
    height:30,
    borderRadius:50,
    marginRight: 10
  },
  wrapBox:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginVertical:20
    
  },
  text:{
    fontFamily:"KanitRegular",
    fontSize:12
  },
  title:{
    fontSize:17,
    marginTop:10
  },
  btn:{
    backgroundColor:"white",
    padding:5,
    borderRadius:30,
    paddingHorizontal:15
  },
  btnText:{
    color:"black"
  },
  pad:{
    paddingHorizontal:10
  },
  name:{
    fontSize:16,
    marginLeft:10
  },
  wrapComment:{
    marginBottom:10
  },
  textComment:{
    marginRight:5,
    fontSize:15
  },
  fText:{
    fontSize:13,
    color:'gray'
  }
})