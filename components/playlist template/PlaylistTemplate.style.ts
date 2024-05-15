import {StyleSheet, Dimensions} from "react-native"
import { Colors } from '@/constants/Colors';

const screenWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
  container:{
    padding:10,
    flexDirection:"row",
    height:110,
    marginVertical:5,
    alignItems:"center"
  },
  wrapper:{
    marginLeft:15,
    justifyContent:"space-between",
    width:"60%",
    paddingRight:10
  },
  wrap:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  imageBox:{
    width:"40%"
  },
  img:{
    width:"100%",
    height:"100%",
    borderRadius:10
  },
  text:{
    fontFamily:"KanitRegular",
    fontSize:14,
    color:"gray",
    marginRight:5
  },
  title:{
    width: screenWidth - 200,
    fontFamily:"ExoRegular",
    marginBottom:10
  },
  icon: (colorScheme) => ({
    color: Colors[colorScheme ?? "light"].tint,
    marginRight:10,
    fontSize:18
    
  }),
  wrapBox:{
    flexDirection:"row",
  }
})