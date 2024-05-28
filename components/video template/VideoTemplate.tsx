import { View, Image, Text } from "react-native"
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from "@/components/ThemedView"
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./VideoTemplate.style"
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ReactNode, useEffect, useState } from "react"
import { FontAwesome6 } from '@expo/vector-icons';
import Button from "@/components/button template/Button"
import * as FileSystem from 'expo-file-system';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { Entypo } from '@expo/vector-icons';
import { useAppDispatch } from "@/hooks/use dispatch/useDispatch";

type Prop = {
  imageUrl: string;
  imageStyle: object;
  containerStyle: object;
  wrapperStyle: object;
  wrapStyle: object;
  title: string;
  lengthOfVideo: string;
  videoFileUrl: string;
  videoHeight: number;
  videoWidth: number;
  source: string;
  sourceStyle: object;
  sourceIcon: any;
  qualityBoxStyle: object;
  floatStyle: object;
  imageBoxStyle: object;
  titleStyle: object;
  isUserProfile: boolean;
  wrapQualityData: object;
  wrapBoxStyle: object;
}

const VideoTemplate = ({
  imageUrl = "", imageStyle = {}, containerStyle = {}, wrapperStyle = {},
  wrapStyle = {}, title = "", videoHeight, videoWidth, lengthOfVideo = "", videoFileUrl = "", source = "",
  sourceStyle = {}, wrapQualityData = {},
  titleStyle = {}, isUserProfile = false, wrapBoxStyle = {},
  sourceIcon = null, qualityBoxStyle = {}, floatStyle = {}, imageBoxStyle = {} }: Prop) => {
  const colorScheme = useColorScheme()
  const [isInListForm, setIsInListForm] = useState(false)
  const iconStyle = colorScheme === 'light' ? styles.iconLight : styles.iconDark;
  const [formatedDuration, setFormatedDuration] = useState<null | string>(null)
  const [contentLoaded, setContentLoaded] = useState(false)
  const [videoQuality, setVideoQuality] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (lengthOfVideo && videoFileUrl && videoWidth && videoHeight) {
      setContentLoaded(true)
      const hours = Math.floor(+lengthOfVideo / 3600)
      const minutes = Math.floor((+lengthOfVideo % 3600) / 60);
      const seconds = Math.floor(+lengthOfVideo % 60)
      const formatMinutes = minutes > 0 && minutes < 10 ? `0${minutes}` : `${minutes}`
      const formatSeconds = seconds > 0 && seconds < 10 ? `0${seconds}` : `${seconds}`
      const displayHrsMinSecs = hours === 0 ? `${formatMinutes}:${formatSeconds}` : `${hours}:${formatMinutes}:${formatSeconds}`
      setFormatedDuration(displayHrsMinSecs)


      if (videoWidth >= 3840 || videoHeight >= 2160) {
        setVideoQuality("4k")
      }
      else if (videoWidth >= 2560 || videoHeight >= 1440) {
        setVideoQuality("1080p")
      }
      else if (videoWidth >= 1920 || videoHeight >= 1080) {
        setVideoQuality("1080p")
      }
      else if (videoWidth >= 1280 || videoHeight >= 720) {
        setVideoQuality("720p")
      }
      else if (videoWidth >= 854 || videoHeight >= 480) {
        setVideoQuality("SD (480p)")
      }
      else if (videoWidth >= 640 || videoHeight >= 360) {
        setVideoQuality("SD (360p)")
      }
      else {
        setVideoQuality("SD (low)")
      }

      generateThumbnail(videoFileUrl)
    }

  }, [contentLoaded])

  const generateThumbnail = async (uri) => {
    try {
      const { uri: thumbnailUri } = await VideoThumbnails.getThumbnailAsync(
        uri,
        {
          time: 500,
        }
      );


      setThumbnailUrl(thumbnailUri)
      console.log("thumb" + thumbnailUri)
    } catch (error) {
      console.error("Error generating thumbnail:", error);
    }
  };






  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.imageBox, imageBoxStyle]}>
        <Ionicons style={[styles.float, floatStyle]} name="camera-outline" size={24}
        />
        <Image style={styles.img} source={{ uri: thumbnailUrl ? thumbnailUrl : "https://firebasestorage.googleapis.com/v0/b/vidtube-4927a.appspot.com/o/images__3_-removebg-preview.png?alt=media&token=d2d957bd-0d48-415c-ba9a-08e9bb28c7ce" }} alt="sh" />
        <Text style={styles.mins}> {formatedDuration}</Text>

      </View>

      <View style={[styles.wrapper]}>
        <View style={wrapBoxStyle}>
          <ThemedText numberOfLines={2} style={[styles.title, titleStyle]}>{title}</ThemedText>

          <View style={[styles.wrap, wrapStyle, wrapQualityData]}>
            <ThemedText style={styles.text}>{videoQuality}</ThemedText>
            <ThemedText style={styles.text}>{""}</ThemedText>
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
            <ThemedText style={styles.text}>{videoQuality} </ThemedText>
            <ThemedText style={styles.text}>{"thumbnailUrl"} </ThemedText>
          </View>}

          {isUserProfile ?
            <View style={styles.wrapData}>
              <ThemedText style={styles.text}>{thumbnailUrl} </ThemedText>
              <Button disabled={false} component={<FontAwesome6 name="ellipsis-vertical"
                style={iconStyle} size={20} color="black"
              />} />
            </View>
            : <Button disabled={false} component={<FontAwesome6 name="ellipsis-vertical"
              style={iconStyle} size={20} color="black"
            />} />}
        </View>
      </View>



    </View >
  )
}


export default VideoTemplate