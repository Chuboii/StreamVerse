import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, TextInput, ScrollView, View, StyleSheet } from "react-native"
import { useLocalSearchParams, router } from "expo-router"
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from "@/components/button template/Button"
import { ThemedText } from "@/components/ThemedText"
import StarRatingTemplate from "@/components/star rating template/StarRatingTemplate"


const BottomPrompt = () => {
  
  return (
    <View style={styles.container}>
     <ThemedText style={styles.title}> Rate our app </ThemedText>
     <StarRatingTemplate style={styles.icon}/>
     <ThemedText style={styles.text}> What do you think of streamverse </ThemedText>
     <View style={styles.wrapper}>
     <Button style={styles.btn} component={<Text style={styles.btnText}> Cancel </Text>}/>
    <Button style={[styles.btn, styles.btnActive]} component={<Text style={[styles.btnText,
    styles.btnTextActive]}> OK </Text>}/>
    </View>
    </View>
    )
}

export default BottomPrompt

const styles = StyleSheet.create({
  container:{
    position:"absolute",
    bottom:0,
    backgroundColor:"#151718",
    zIndex:100,
    width:"100%",
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    padding:15,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:30
  },
  btn:{
    backgroundColor:"gray",
    marginHorizontal:5,
    padding:15,
    width:130,
    borderRadius:10,
    opacity: .5
  },
  btnText:{
    fontFamily:"KanitRegular",
    textAlign:"center"
  },
  btnTextActive:{
    color:"white"
  },
  btnActive:{
    backgroundColor:"orangered"
  },
  title:{
    fontFamily:"KanitRegular",
    fontSize:23,
    marginBottom:15
  },
  text:{
    color:'gray',
    fontFamily:"KanitRegular",
    fontSize:12,
    marginTop:10
  },
  wrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:20
  },
  icon:{
    
  }
})