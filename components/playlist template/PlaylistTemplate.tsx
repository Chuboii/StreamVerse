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
import * as MediaLibrary from 'expo-media-library';


type Prop = {
  imageUrl: [] | undefined | string;
  imageStyle: object | undefined;
  containerStyle: object | undefined;
  wrapperStyle: object | undefined;
  wrapStyle: object | undefined;
  title: string | undefined;
  quality: string | undefined;
  lengthOfVideos: string | undefined;
  data: string | undefined;
  source: string | undefined;
  sourceStyle: object | undefined;
  sourceIcon: string | undefined;
  qualityBoxStyle: object | undefined;
  floatStyle: object | undefined;
  imageBoxStyle: object | undefined;
  numOfVideos: number | string | undefined;
  fileLocalUrl: string | undefined;
};
const PlayListTemplate = ({
  imageUrl = [],
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
  fileLocalUrl = ""
}: Prop) => {
  const colorScheme = useColorScheme();
  const [thumbnailUrl, setThumbnailUrl] = useState(null)
  const [localFileUrl, setLocalFileUrl] = useState('')
  const iconStyle =
    colorScheme === "light" ? styles.iconLight : styles.iconDark;


  useEffect(() => {
    if (imageUrl.length > 0) {
      setLocalFileUrl(imageUrl[0])
    }
  }, [])


  // useEffect(() => {
  //   generateThumbnail()
  // }, [])



  // const generateThumbnail = async () => {
  //   try {

  //     if (localFileUrl) {

  //       const { uri: thumbnailUri } = await VideoThumbnails.getThumbnailAsync(
  //         localFileUrl.uri,
  //         {
  //           time: 500,
  //         }
  //       );
  //       console.log(thumbnailUri);

  //       setThumbnailUrl(thumbnailUri)
  //     }
  //   } catch (error) {
  //     console.error("Error generating thumbnail:", error);
  //   }
  // };


  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.imageBox, imageBoxStyle]}>
        <View style={styles.imageWrapper}>
          {

            <View style={styles.wrap}>
              <Image style={styles.img} source={require('../../assets/images/dummy.jpeg')} alt="sh" />
            </View>
          }
        </View>

        <View style={styles.imageBox}></View>
        <View style={styles.imageShade}></View>
        <View style={styles.imageShade2}></View>

      </View>

      <View style={styles.wrapper}>
        <View>
          <ThemedText numberOfLines={2} style={styles.title}>
            {title}{" "}
          </ThemedText>

          <View style={[styles.wrap, wrapStyle]}>
            <View style={styles.wrapBox}>
              <ThemedText style={styles.text}>{numOfVideos} videos </ThemedText>
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
