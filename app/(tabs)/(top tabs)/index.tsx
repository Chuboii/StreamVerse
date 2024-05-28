import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet, ScrollView, Text } from "react-native";
import * as MediaLibrary from "expo-media-library";
import VideoTemplate from "@/components/video template/VideoTemplate";
import Spinner from "@/components/spinner/Spinner";

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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAlbums();
  }, [loading]);

  const getAlbums = async () => {
    try {
      if (permissionResponse?.status !== "granted") {
        setLoading(true)
        const response = await requestPermission();
        if (response.status !== "granted") {
          console.log("Permission not granted");
          return;
        }
      }
      const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: true,
      });

      const allVideos = await extractVideosFromAlbums(fetchedAlbums);
      console.log(allVideos);

      setVideos(allVideos);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const extractVideosFromAlbums = async (
    albums: MediaLibrary.Album[]
  ): Promise<VideoAsset[]> => {
    try {
      const allVideos: VideoAsset[] = [];

      for (const album of albums) {
        const albumAssets = await MediaLibrary.getAssetsAsync({
          album: album.id,
          mediaType: ["video"],
          first: 1,
        });

        const assetDetails = await Promise.all(
          albumAssets.assets.map(async (asset) => {
            const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
            return assetInfo as VideoAsset;
          })
        );

        allVideos.push(...assetDetails);
      }
      return allVideos;

    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      {loading && <Spinner />}
      <StatusBar hidden={true} />
      <ScrollView>
        {videos.length === 0 ? (
          <Text>No videos found.</Text>
        ) : (
          videos.map((video) => (
            <VideoTemplate
              key={video.id}
              sourceIcon="camera-outline"
              title={video.filename}
              lengthOfVideo={video.duration}
              source={video.creationTime.toString()}
              qualityBoxStyle={styles.qStyles}
              videoFileUrl={video.uri}
              videoHeight={video.height}
              videoWidth={video.width}
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
            />
          ))
        )}
      </ScrollView>
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
