import {StyleSheet} from "react-native"
import { Colors } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: (colorScheme) => ({
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:0,
    backgroundColor: Colors[colorScheme ?? "light"].transparent
  }),
  wrap: (colorScheme) => ({
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: Colors[colorScheme ?? "light"].gray,
    padding:15,
    paddingVertical:10,
    borderRadius:15
  }),
  wrapper:{
    flexDirection:"row",
    alignItems:"center",
  },
  icon: (colorScheme, margin) => ({
    color:Colors[colorScheme ?? "light"].tint,
    fontSize:20,
    marginRight: margin
  }),
  selected: (colorScheme, margin) => ({
    backgroundColor: Colors[colorScheme ?? "light"].transparent,
    color:Colors[colorScheme ?? "light"].tint,
    padding:10,
    paddingHorizontal:20,
    borderRadius:10,
    marginRight:margin
  }),
  wrapText:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    paddingVertical:20
  },
  text:{
    fontFamily:"ExoRegular",
    textTransform:"capitalize",
    borderBottomColor:"red",
    borderBottomWidth:1,
    paddingBottom:5,
    textAlign:"center",
    width:70
  },
  logoText:(colorScheme)=> ({
    fontFamily:"KanitRegular",
    fontSize:25,
   textAlign:"center",
   marginLeft:10,
   color:Colors[colorScheme ?? "light"].tint,
  }),
  wrap:{
    flexDirection:"row",
    alignItems:"center"
  },
  logoIcon:{
  backgroundColor:"orangered",
  width:40,
  height:40,
  borderRadius:50,
  justifyContent:"center",
  alignItems:'center'
  }
})