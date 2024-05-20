import { View,TextInput,Image,Text, StyleSheet } from 'react-native'
import React, {useRef} from 'react'
import { AntDesign,FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from
"@/components/ThemedView";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useScrollToTop } from '@react-navigation/native';
import Prompt from "@/components/prompt/Prompt"

const videoDownloader = () => {
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;
   const ref = useRef(null)
   useScrollToTop(ref)
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrap}>
       <View style={styles.logoIcon}>
            <FontAwesome5 name="play" size={18} color="white"
              style={[styles.icon]} />
        </View>
        
    <ThemedView style={styles.inputBox}>
      <TextInput
      placeholderTextColor="rgba(255,255,255,.6)"
      style={styles.input}
      placeholder="Paste link to download"
      />
    </ThemedView>
       <Button
          component={
            <AntDesign
              name="download"
              size={27}
              style={[styles.headerIcon, colorStyle]}
            />
          }
        />
</View>

<View style={styles.boxWrapper}>
<View style={styles.box}>
<Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>
<ThemedText style={styles.text}> Youtube </ThemedText>
</View>
<View style={styles.box}>
<Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>
<ThemedText style={styles.text}> Youtube </ThemedText>
</View>
<View style={styles.box}>

<Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>

<ThemedText style={styles.text}> Youtube </ThemedText>
</View>
<View style={styles.box}>
<Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>
<ThemedText style={styles.text}> Youtube </ThemedText>
</View>
<View style={styles.box}>
<Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>
<ThemedText style={styles.text}> Youtube </ThemedText>
</View>
<View style={styles.box}>
<Image style={styles.image} source={require("../../assets/images/dummy.jpeg")}/>
<ThemedText style={styles.text}> Youtube </ThemedText>
</View>

</View>
 
 <Prompt />

    </SafeAreaView>
  )
}

export default videoDownloader

const styles = StyleSheet.create({
  container:{
    
  },
  input:{
    color: "white",
    fontFamily:"KanitRegular"
  },
  inputBox:{
    padding:10,
    flex:1,
    marginHorizontal:10,
    borderRadius:10
    
  },
  headWrap:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10
  },
  logoIcon:{
    backgroundColor:"orangered",
    width:40,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50
  },
  image:{
    width:50,
    height:50,
    borderRadius:10
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  text:{
    fontFamily:"KanitRegular",
    fontSize:13,
    marginTop:3
  },
  box:{
    justifyContent:"center",
    alignItems:"center",
    margin:20,
    marginVertical:10
  }, 
  boxWrapper:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginBottom:50,
    marginTop:20,
    justifyContent:"center"
  }
})