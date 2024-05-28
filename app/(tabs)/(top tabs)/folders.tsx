import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import VideoFolder from "@/components/video folder/VideoFolder";
import Button from "@/components/button template/Button";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from '@/hooks/use dispatch/useDispatch';
import { localVideoAlbum } from '@/lib/redux/reducers/storeLocalVideoData/storeLocalVideoData';
import Spinner from '@/components/spinner/Spinner';

interface Album {
  assetCount: number;
  id: string;
  title: string;
  type?: MediaLibrary.AlbumType;
  startTime: number;
  endTime: number;
  approximateLocation?: MediaLibrary.Location;
  locationNames?: string[];
}

const VideoFoldersList: React.FC = () => {
  const [albums, setAlbums] = useState<Album[] | null>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!permissionResponse || permissionResponse.status !== 'granted') {
      requestPermission().then(response => {
        if (response.status === 'granted') {
          getAlbums();
        } else {
          console.log('Permission not granted');
        }
      });
    } else {
      getAlbums();
    }
  }, []);

  const getAlbums = async (): Promise<void> => {
    try {
      setLoading(true);
      const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: false,
      });

      const filteredEmptyAlbums: Album[] = [];

      for (const alb of fetchedAlbums) {
        const albumAssets = await MediaLibrary.getAssetsAsync({
          album: alb.id,
          mediaType: 'video',
          first: 10,
        });



        if (albumAssets.assets.length > 0) {
          const assetDetails = await Promise.all(
            albumAssets.assets.map(async (asset) => {
              const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
              return assetInfo;
            })
          );

          if (assetDetails.length > 0) {
            filteredEmptyAlbums.push({ ...alb, assetCount: assetDetails.length });
          }
        }
      }

      if (filteredEmptyAlbums.length > 0) {
        const sortByTitleAscending = filteredEmptyAlbums.sort((a, b) => a.title.localeCompare(b.title));
        setAlbums(sortByTitleAscending);
        dispatch(localVideoAlbum(sortByTitleAscending));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const navigateToFolderContents = (id: string): void => {
    router.push({
      pathname: `video-list/${id}`,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Spinner />}
      <ScrollView>
        <View style={styles.wrap}>
          {albums && albums.map((album) => (
            <Button
              key={album.id}
              disabled={false}
              onClick={() => navigateToFolderContents(album.id)}
              component={<VideoFolder totalNumOfVideos={album.assetCount} folderName={album.title} />}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: "100%",
    justifyContent: "center",
  },
  wrap: {
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: "center",
  },
});

export default VideoFoldersList;
