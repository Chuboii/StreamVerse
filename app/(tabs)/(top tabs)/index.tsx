import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet, ScrollView, Text, FlatList } from "react-native";
import * as MediaLibrary from "expo-media-library";
import VideoTemplate from "@/components/video template/VideoTemplate";
import Spinner from "@/components/spinner/Spinner";
import { router, usePathname } from "expo-router";
import { useAppDispatch } from "@/hooks/use dispatch/useDispatch";
import { localVideoAlbum, localVideoAlbumContents, localVideoFilesFromAlbum, localVideoSingleContentDetails } from "@/lib/redux/reducers/storeLocalVideoData/storeLocalVideoData";
import * as ScreenOrientation from 'expo-screen-orientation'
interface VideoAsset {
  id: string;
  filename: string;
  uri: string;
  duration: number;
  mediaType: MediaLibrary.MediaTypeValue;
  height: number;
  width: number;
  creationTime: number;
}

const VideoScreen: React.FC = () => {
  const [videos, setVideos] = useState<VideoAsset[]>([]);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [updateOrientation, setUpdateOrientation] = useState(false)
  const dispatch = useAppDispatch();
  const pathname = usePathname()

  useEffect(() => {

    if (pathname === "/") {
      const unlockScreenOrientation = async () => {
        ScreenOrientation.unlockAsync()
        setUpdateOrientation(true)
      }
      unlockScreenOrientation()
    }
    getAlbums();
  }, [loading, updateOrientation]);

  const getAlbums = async () => {
    try {
      if (permissionResponse?.status !== "granted") {
        setLoading(true);
        const response = await requestPermission();
        if (response.status !== "granted") {
          console.log("Permission not granted");
          return;
        }
      }
      const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: true,
      });

      const filteredEmptyAlbums = [];

      for (const alb of fetchedAlbums) {
        const albumAssets = await MediaLibrary.getAssetsAsync({
          mediaType: "video",
          album: alb.id,
          first: 1,
        });

        if (albumAssets.assets.length > 0) {
          const assetDetails = await Promise.all(
            albumAssets.assets.map(async (asset) => {
              const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
              return assetInfo;
            })
          );

          if (assetDetails.length > 0) {
            filteredEmptyAlbums.push({
              ...alb,
              assetCount: assetDetails.length,
            });
          }
        }
      }
      const allVideos = await extractVideosFromAlbums(filteredEmptyAlbums);

      const filteredOutDeletedAndEmptyVideos = allVideos.filter((f) => f.duration !== 0);

      setVideos(filteredOutDeletedAndEmptyVideos);
      dispatch(localVideoFilesFromAlbum(filteredOutDeletedAndEmptyVideos))
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const extractVideosFromAlbums = async (albums: MediaLibrary.Album[]) => {
    try {
      const allVideos = [];

      for (const album of albums) {
        const albumAssets = await MediaLibrary.getAssetsAsync({
          album: album.id,
          mediaType: ["video"],
          first: 1,
        });

        await Promise.all(
          albumAssets.assets.map(async (asset) => {
            try {
              const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
              allVideos.push({ ...asset, albumTitle: album.title });

              return assetInfo as VideoAsset;
            } catch (err) {
              console.log(err);
            }
          })
        );
      }
      return allVideos;
    } catch (err) {
      console.log(err);
    }
  };

  const navigateToPlaySelectedLocalVideo = (video: any) => {
    dispatch(localVideoSingleContentDetails(video));
    router.navigate("local-video-player");
  };

  return (
    <View style={styles.container}>
      {loading && <Spinner />}
      <StatusBar hidden={true} />
      {videos.length === 0 ? (
        <Text>No videos found.</Text>
      ) :
        <FlatList
          data={videos}
          keyExtractor={data => String(data.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            if (item.filename.split('.').includes("HEVC-PSA")) {
              return null
            }
            return (<VideoTemplate
              sourceIcon="camera-outline"
              title={item.filename}
              lengthOfVideo={item.duration}
              source={item.creationTime.toString()}
              qualityBoxStyle={styles.qStyles}
              videoFileUrl={item.uri}
              videoHeight={item.height}
              videoWidth={item.width}
              imageUrl={""}
              imageStyle={undefined}
              containerStyle={undefined}
              wrapperStyle={undefined}
              wrapStyle={undefined}
              sourceStyle={undefined}
              floatStyle={undefined}
              imageBoxStyle={undefined}
              titleStyle={undefined}
              isUserProfile={false}
              wrapQualityData={undefined}
              wrapBoxStyle={undefined}
              videoId={item.id}
              videoAlbumTitle={item.albumTitle}
              onClick={() => navigateToPlaySelectedLocalVideo(item)}
            />)
          }}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  qStyles: {
    display: "none",
  },
  container: {
    marginVertical: 10,
  },
  status: {
    backgroundColor: "white",
  },
});

export default VideoScreen;
