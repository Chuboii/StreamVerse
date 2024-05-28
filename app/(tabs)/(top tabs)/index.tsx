import React, { useState, useEffect } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, Text } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import VideoTemplate from "@/components/video template/VideoTemplate";

export default function VideoScreen() {
  const [videos, setVideos] = useState([]);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    try {
      if (permissionResponse?.status !== 'granted') {
        const response = await requestPermission();
        if (response.status !== 'granted') {
          console.log('Permission not granted');
          return;
        }
      }

      const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: true,
      });

      const allVideos = await extractVideosFromAlbums(fetchedAlbums);
      setVideos(allVideos);
    } catch (err) {
      console.log(err);
    }
  };

  const extractVideosFromAlbums = async (albums) => {
    const allVideos = [];

    for (const album of albums) {
      const albumAssets = await MediaLibrary.getAssetsAsync({
        album: album.id,
        mediaType: 'video',
      });

      const assetDetails = await Promise.all(
        albumAssets.assets.map(async (asset) => {
          const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
          return assetInfo;
        })
      );

      allVideos.push(...assetDetails);
    }

    return allVideos;
  };

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
    <View style={styles.container}>
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
              source={video.mediaType}
              qualityBoxStyle={styles.qStyles}
              videoFileUrl={video.uri}
              videoHeight={video.height}
              videoWidth={video.width}
            />
          ))
        )}
      </ScrollView>
    </View >
  );
}

const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const styles = StyleSheet.create({
  qStyles: {
    display: "none"
  },
  container: {
    marginVertical: 10,
  },
  status: {
    backgroundColor: "white",
  },
});
