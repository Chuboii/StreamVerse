import {View, StyleSheet, StatusBar} from "react-native"
import VideoTemplate from "@/components/video template/VideoTemplate"

export default function VideoScreen() {
  
  return (
    <View style={styles.container}>
    <StatusBar hidden={true} />
    <VideoTemplate sourceIcon="camera-outline"
    title="Bro didnt see that coming at all"
   quality="1080p"
  lengthOfVideo="0:01"
  data="1.1 GB"
  source="Camera"
  qualityBoxStyle = {styles.qStyles}
  
    />
    
        <VideoTemplate sourceIcon="camera-outline"
    title="Bro didnt see that coming at all"
   quality="1080p"
  lengthOfVideo="0:01"
  data="1.1 GB"
  source="Camera"
  qualityBoxStyle = {styles.qStyles}
  
    />
      
    </View>
)
}

const styles = StyleSheet.create({
  qStyles:{
    display:"none"
  },
   container:{
     marginVertical:10
   },
   status:{
     backgroundColor:"white"
   }
})