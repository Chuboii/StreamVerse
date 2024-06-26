import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  FlatList,
  Dimensions
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import VideoTemplate from "@/components/video template/VideoTemplate";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState, useEffect } from 'react'
import * as MediaLibrary from 'expo-media-library';
import { useAppSelector } from "@/hooks/use selector/useSelector";
import { useAppDispatch } from "@/hooks/use dispatch/useDispatch";
import { localVideoParentHeader, localVideoSingleContentDetails } from "@/lib/redux/reducers/storeLocalVideoData/storeLocalVideoData";
import Spinner from "@/components/spinner/Spinner";

const VideoList = () => {
  const { slug } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const [assets, setAssets] = useState([]);
  const colorStyle = colorScheme === "light" ? styles.colorLight : styles.colorDark;
  const getLocalVideoAlbum = useAppSelector(state => state.localVideo.localVideoAlbum)
  const dispatch = useAppDispatch()
  const [getLocalVideoAlbumParentHeader, setGetLocalVideoAlbumParentHeader] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigateBack = () => router.back();
  const getLocalVideoAlbumContents = useAppSelector(state => state.localVideo.localVideoAlbumContents)


  useEffect(() => {
    async function getAlbumAssets() {
      try {
        setLoading(true)

        const albumAssets = await MediaLibrary.getAssetsAsync({
          album: slug,
          mediaType: 'video',  // Fetch only videos  // Limit to 5 videos
        })

        // Fetch additional info for each asset
        const assetDetails = await Promise.all(
          albumAssets.assets.map(async (asset) => {
            const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
            return assetInfo;
          })
        );

        setAssets(assetDetails);


        setGetLocalVideoAlbumParentHeader(getLocalVideoAlbumContents?.title)
      }
      catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getAlbumAssets();

  }, [slug, getLocalVideoAlbumContents]);



  const navigateToPlaySelectedLocalVideo = (url: string) => {
    dispatch(localVideoSingleContentDetails(url))
    router.navigate("local-video-player")
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrap}>
        <Button
          disabled={false}
          onClick={navigateBack}
          component={
            <AntDesign
              name="arrowleft"
              size={24}
              style={[styles.icon, colorStyle]}
            />
          }
        />

        <ThemedText numberOfLines={1} style={styles.text} darkColor="white" lightColor="black">
          {getLocalVideoAlbumParentHeader ? getLocalVideoAlbumParentHeader : ""}
        </ThemedText>

        <Button
          disabled={false}
          component={
            <MaterialCommunityIcons
              name="format-list-text"
              color="white"
              style={[styles.icon, colorStyle]}
            />
          }
        />
      </View>
      {loading && <Spinner />}
      <FlatList
        style={styles.wrap}
        data={assets}
        keyExtractor={(asset) => asset.id}
        renderItem={({ item }) => {
          if (item.filename.split('.').includes("HEVC-PSA")) {
            return null
          }
          return (
            <VideoTemplate
              onClick={() => navigateToPlaySelectedLocalVideo(item)}
              sourceIcon="camera-outline"
              videoFileUrl={item.uri}
              title={item.filename}
              videoHeight={item.height}
              videoWidth={item.width}
              lengthOfVideo={item.duration}
              sourceStyle={styles.sStyles}
              floatStyle={styles.fStyles}
              wrapStyle={styles.wStyles}
              containerStyle={styles.cStyles}
              wrapQualityData={styles.wrapQuality}
              wrapBoxStyle={styles.wrapBox}
            />
          )
        }
        }
      />


    </SafeAreaView>
  );
};

export default VideoList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  sStyles: {
    display: "none",
  },
  fStyles: {
    display: "none",
  },
  wStyles: {
    display: "none",
  },
  colorLight: {
    color: Colors.light.tint,
  },
  wrapQuality: {
    display: "flex"
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  cStyles: {
    height: 120,
    marginVertical: 3,
  },
  icon: {
    fontSize: 20,
  },
  headWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 20,
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 19,
    width: Dimensions.get("window").width / 1.5,
    textAlign: 'center'
  },
  wrapBox: {
    justifyContent: "space-between",
    flex: 1
  },
  wrap: {
    marginBottom: 40
  }
});
