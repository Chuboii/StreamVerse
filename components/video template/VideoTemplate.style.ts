import {StyleSheet, Dimensions} from "react-native"
import { Colors } from '@/constants/Colors';

const screenWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
  container:{
    padding:10,
    flexDirection:"row",
    height:120,
    marginVertical:5
  },
  wrapper:{
    marginLeft:15,
    justifyContent:"space-between",
    width:"60%",
    paddingRight:10
  },
  wrap:{
    flexDirection:"row",
    alignItems:"center"
  },
  imageBox:{
    width:"40%"
  },
  img:{
    width:"100%",
    height:"100%",
    borderRadius:10
  },
  mins:{
    backgroundColor:"rgba(0,0,0,.4)",
    position:"absolute",
    right:5,
    bottom:5,
    color:"white",
    padding:5,
    borderRadius:5
  },
  text:{
    fontFamily:"KanitRegular",
    fontSize:14,
    color:"gray",
    marginRight:5
  },
  float:{
    position:"absolute",
    left:5,
    bottom:5,
    color:"white",
    padding:5,
    borderRadius:5,
    zIndex:1,
    fontSize:17,
    backgroundColor:"rgba(0,0,0,.4)",
  },
  title:{
    width: screenWidth - 200,
    fontFamily:"ExoRegular",
  },
  icon: (colorScheme) => ({
    color: Colors[colorScheme ?? "light"].tint,
    marginRight:10,
    fontSize:18
    
  }),
  wrapBox:{
    flexDirection:"row",
    padding:7,
    borderRadius:5
  }
})