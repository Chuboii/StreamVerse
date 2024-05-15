import {View, Image, Text} from "react-native"
import { ThemedText } from '@/components/ThemedText';
import {ThemedView} from "@/components/ThemedView"
import { Ionicons } from '@expo/vector-icons';
import {styles} from "./VideoTemplate.style"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import {useState} from "react"
import { FontAwesome6 } from '@expo/vector-icons';
import Button from "@/components/button template/Button"
const VideoTemplate = ({imageUrl, imageStyle, containerStyle, wrapperStyle,
wrapStyle, title, quality,lengthOfVideo, data, source,sourceStyle,
sourceIcon,qualityBoxStyle, floatStyle,imageBoxStyle}) => {
  const colorScheme = useColorScheme()
  const [isInListForm, setIsInListForm] = useState(false)
  
  
  return (
    <View style={[styles.container, containerStyle]}>
    <View style={[styles.imageBox, imageBoxStyle]}>
  <Ionicons style={[styles.float, floatStyle]} name="camera-outline" size={24}
    />
    <Image style={styles.img} source={require("../../assets/images/dummy.jpeg")} alt="sh"/>
    <Text style={styles.mins}> {lengthOfVideo} </Text>
    </View>
    
    <View style={styles.wrapper}>
    <View>
    <ThemedText numberOfLines={2} style={styles.title}>{title}</ThemedText>
   
    <View style={[styles.wrap, wrapStyle]}>
    <ThemedText style={styles.text}>{quality} </ThemedText>
    <ThemedText style={styles.text}>{data} </ThemedText>
    </View>
    </View>
    
    <View style={[styles.wrap, {justifyContent:"space-between"}]}> 
    <ThemedView style={[styles.wrapBox, sourceStyle]}>
    <Ionicons style={styles.icon(colorScheme)} name={sourceIcon} size={24}
    />
    <ThemedText style={styles.text}>{source} </ThemedText>
    </ThemedView>
    
  <View style={[styles.wrap, qualityBoxStyle]}>
    <ThemedText style={styles.text}>{quality} </ThemedText>
    <ThemedText style={styles.text}>{data} </ThemedText>
    </View>
    <Button component={<FontAwesome6 name="ellipsis-vertical"
    style={styles.icon(colorScheme)} size={24} color="black"
    />}/>
    </View>
    </View>
    

    
    </View>
    )
}


export default VideoTemplate