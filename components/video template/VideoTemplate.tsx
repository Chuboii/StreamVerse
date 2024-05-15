import { View, Image, Text } from "react-native"
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from "@/components/ThemedView"
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./VideoTemplate.style"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ReactNode, useState } from "react"
import { FontAwesome6 } from '@expo/vector-icons';
import Button from "@/components/button template/Button"

type Prop = {
  imageUrl: string;
  imageStyle: object;
  containerStyle: object;
  wrapperStyle: object;
  wrapStyle: object;
  title: string;
  quality: string
  lengthOfVideo: string;
  data: string;
  source: string;
  sourceStyle: object;
  sourceIcon: any;
  qualityBoxStyle: object;
  floatStyle: object;
  imageBoxStyle: object;
}

const VideoTemplate = ({ imageUrl, imageStyle, containerStyle, wrapperStyle,
  wrapStyle, title, quality, lengthOfVideo, data, source, sourceStyle,
  sourceIcon, qualityBoxStyle, floatStyle, imageBoxStyle }: Prop) => {
  const colorScheme = useColorScheme()
  const [isInListForm, setIsInListForm] = useState(false)
  const iconStyle = colorScheme === 'light' ? styles.iconLight : styles.iconDark;


  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.imageBox, imageBoxStyle]}>
        <Ionicons style={[styles.float, floatStyle]} name="camera-outline" size={24}
        />
        <Image style={styles.img} source={require("../../assets/images/dummy.jpeg")} alt="sh" />
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

        <View style={[styles.wrap, { justifyContent: "space-between" }]}>
          <ThemedView style={[styles.wrapBox, sourceStyle]}>
            <Ionicons style={iconStyle} name={sourceIcon} size={24}
            />
            <ThemedText style={styles.text}>{source} </ThemedText>
          </ThemedView>

          <View style={[styles.wrap, qualityBoxStyle]}>
            <ThemedText style={styles.text}>{quality} </ThemedText>
            <ThemedText style={styles.text}>{data} </ThemedText>
          </View>
          <Button component={<FontAwesome6 name="ellipsis-vertical"
            style={iconStyle} size={24} color="black"
          />} />
        </View>
      </View>



    </View>
  )
}


export default VideoTemplate