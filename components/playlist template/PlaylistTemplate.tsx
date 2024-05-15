import {View, Image, Text} from "react-native"
import { ThemedText } from '@/components/ThemedText';
import {ThemedView} from "@/components/ThemedView"
import { Ionicons } from '@expo/vector-icons';
import {styles} from "./PlaylistTemplate.style"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import {useState} from "react"
import { FontAwesome6 } from '@expo/vector-icons';
import Button from "@/components/button template/Button"

const PlayListTemplate = ({imageUrl, imageStyle, containerStyle, wrapperStyle,
wrapStyle, title, lengthOfVideos, numOfVideos, source, sourceIcon, imageBoxStyle}) => {
  const colorScheme = useColorScheme()
  
  
  
  return (
    <View style={[styles.container, containerStyle]}>
    <View style={[styles.imageBox, imageBoxStyle]}>
  
    <Image style={styles.img} source={imageUrl} alt="sh"/>

    </View>
    
    <View style={styles.wrapper}>
    <View>
    <ThemedText numberOfLines={2} style={styles.title}>{title} </ThemedText>
   
    <View style={[styles.wrap, wrapStyle]}>
    <View style={styles.wrapBox}>
    <ThemedText style={styles.text}>{numOfVideos} </ThemedText>
    <ThemedText style={styles.text}>{lengthOfVideos} </ThemedText>
    </View>
    <Button component={<FontAwesome6 name="ellipsis-vertical"
    style={styles.icon(colorScheme)} size={24} color="black"
    />}/>
    
    </View>
    </View>

    </View>

    

    
    </View>
    )
}


export default PlayListTemplate