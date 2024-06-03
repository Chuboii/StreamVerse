import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import VideoFolder from "@/components/video folder/VideoFolder";
import Button from "@/components/button template/Button";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch } from '@/hooks/use dispatch/useDispatch';
import { localVideoAlbum, localVideoAlbumContents } from '@/lib/redux/reducers/storeLocalVideoData/storeLocalVideoData';
import Spinner from '@/components/spinner/Spinner';
import { ThemedText } from '@/components/ThemedText';

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
  const [localVideoContentUrl, setLocalVideoContentUrl] = useState<any[]>([])

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    try {
      if (permissionResponse?.status !== 'granted') {
        await requestPermission()
      }

      setLoading(true);
      const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: false,
      });

      const filteredEmptyAlbums: Album[] = [];
      const arrOfVideoImageUrls: any[] = []

      for (const alb of fetchedAlbums) {
        const albumAssets = await MediaLibrary.getAssetsAsync({
          mediaType: "video",
          album: alb.id,
          first: 1,
        })

        if (albumAssets.assets.length > 0) {
          const assetDetails = await Promise.all(
            albumAssets.assets.map(async (asset) => {
              const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id)
              return assetInfo;
            })
          );


          if (assetDetails.length > 0) {
            filteredEmptyAlbums.push({ ...alb });
            arrOfVideoImageUrls.push(assetDetails[0].uri[0]);

          }
        }
      }

      if (arrOfVideoImageUrls.length > 0) {
        setLocalVideoContentUrl(arrOfVideoImageUrls);
        console.log(arrOfVideoImageUrls);

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

  const navigateToFolderContents = async (id: string, album): void => {
    try {
      dispatch(localVideoAlbumContents(album))
      router.push({
        pathname: `video-list/${id}`,
      });
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {loading && <Spinner message='Fetching video folders' />}
        <View style={styles.wrap}>
          {albums && albums.map((album) => {
            console.log("count" + album.assetCount);

            return (
              <Button
                key={album.id}
                disabled={false}
                onClick={() => navigateToFolderContents(album.id, album)}
                component={<VideoFolder totalNumOfVideos={album.assetCount} videoImageUrl={localVideoContentUrl} folderName={album.title} />}
              />
            )
          })}
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
