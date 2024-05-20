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
  titleStyle: object;
  isUserProfile: boolean;
  wrapQualityData: object;
}

const VideoTemplate = ({
  imageUrl = "", imageStyle = {}, containerStyle = {}, wrapperStyle = {},
  wrapStyle = {}, title = "", quality = "", lengthOfVideo = "", data = "", source = "",
  sourceStyle = {}, wrapQualityData = {},
  titleStyle = {}, isUserProfile = false,
  sourceIcon = null, qualityBoxStyle = {}, floatStyle = {}, imageBoxStyle = {} }: Prop) => {
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
          <ThemedText numberOfLines={2} style={[styles.title, titleStyle]}>{title}</ThemedText>

          <View style={[styles.wrap, wrapStyle, wrapQualityData]}>
            <ThemedText style={styles.text}>{quality}</ThemedText>
            <ThemedText style={styles.text}>{data}</ThemedText>
          </View>
        </View>

        <View style={[styles.wrap, { justifyContent: "space-between" },
          wrapStyle]}>
          <ThemedView style={[styles.wrapBox, sourceStyle]}>
            <Ionicons style={[styles.icon, iconStyle]} name={sourceIcon} size={24}
            />
            <ThemedText style={styles.text}>{source}</ThemedText>
          </ThemedView>

          {isUserProfile ? "" : <View style={[styles.wrap, qualityBoxStyle]}>
            <ThemedText style={styles.text}>{quality} </ThemedText>
            <ThemedText style={styles.text}>{data} </ThemedText>
          </View>}

          {isUserProfile ?
            <View style={styles.wrapData}>
              <ThemedText style={styles.text}>{data} </ThemedText>
              <Button disabled={false} component={<FontAwesome6 name="ellipsis-vertical"
                style={iconStyle} size={20} color="black"
              />} />
            </View>
            : <Button disabled={false} component={<FontAwesome6 name="ellipsis-vertical"
              style={iconStyle} size={20} color="black"
            />} />}
        </View>
      </View>



    </View>
  )
}


export default VideoTemplate