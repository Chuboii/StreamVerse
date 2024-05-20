import { StyleSheet, Image, Text, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import Button from "@/components/button template/Button"
import React from 'react'
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'


const StreamsVideo = () => {
  
  
  return (
  <View style={styles.video}>
  
  </View>
  )
}

export default StreamsVideo


const styles = StyleSheet.create({
  video:{
    backgroundColor:"red",
    height:250,
    width:"100%"
  }
})