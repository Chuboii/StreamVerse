import {View,StyleSheet, Text} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ThemedText} from "@/components/ThemedText"

const VideoFolder = () => {
  
  return (
    <View style={styles.container}>
<MaterialCommunityIcons name="folder-open" size={24} color="black"
style={styles.icon}/>
     <ThemedText darkColor="white" lightColor="black"
     style={styles.text(14)} numberOfLines={2}>Camera ttt dghd dydy</ThemedText>
     <ThemedText darkColor="gray" lightColor="gray" style={styles.text(11)}> 8 videos </ThemedText>

    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    margin:10,
    minWidth:80,
  },
  icon:{
    fontSize:50,
    color:"orangered"
  },
  text:(size)=>({
    fontFamily:"KanitRegular",
    fontSize:size,
    textAlign:'center',
    width:80
  }),
  
})
export default VideoFolder