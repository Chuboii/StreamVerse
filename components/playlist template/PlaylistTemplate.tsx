import { View, Image, Text, ImageSourcePropType } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./PlaylistTemplate.style";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import Button from "@/components/button template/Button";
import * as VideoThumbnails from 'expo-video-thumbnails';

type Prop = {
  imageUrl: ImageSourcePropType | undefined;
  imageStyle: object;
  containerStyle: object;
  wrapperStyle: object;
  wrapStyle: object;
  title: string;
  quality: string;
  lengthOfVideos: string;
  data: string;
  source: string;
  sourceStyle: object;
  sourceIcon: string;
  qualityBoxStyle: object;
  floatStyle: object;
  imageBoxStyle: object;
  numOfVideos: string;
  fileLocalUrl: string;
};
const PlayListTemplate = ({
  imageUrl,
  imageStyle = {},
  containerStyle = {},
  wrapperStyle = {},
  wrapStyle = {},
  title = "",
  lengthOfVideos = "",
  numOfVideos = "",
  source = "",
  sourceIcon = "",
  imageBoxStyle = {},
  fileLocalUrl:""
}: Prop) => {
  const colorScheme = useColorScheme();
  const iconStyle =
    colorScheme === "light" ? styles.iconLight : styles.iconDark;
  const [thumbnailUrl, setThumbnailUrl] = useState("")


  useEffect(() => {
    if (fileLocalUrl) {
      generateThumbnail(fileLocalUrl)
    }
  }, [])


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
        <Image style={styles.img} source={imageUrl} alt="sh" />
      </View>

      <View style={styles.wrapper}>
        <View>
          <ThemedText numberOfLines={2} style={styles.title}>
            {title}{" "}
          </ThemedText>

          <View style={[styles.wrap, wrapStyle]}>
            <View style={styles.wrapBox}>
              <ThemedText style={styles.text}>{numOfVideos} </ThemedText>
              <ThemedText style={styles.text}>{lengthOfVideos} </ThemedText>
            </View>
            <Button
              disabled={false}
              component={
                <FontAwesome6
                  name="ellipsis-vertical"
                  style={iconStyle}
                  size={24}
                  color="black"
                />
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayListTemplate;
