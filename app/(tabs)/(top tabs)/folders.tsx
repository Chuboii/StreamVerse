import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';
import {
  StorageAccessFramework as SAF
} from "expo-file-system";
import { AntDesign } from '@expo/vector-icons';
import VideoFolder from "@/components/video folder/VideoFolder"
import Button from "@/components/button template/Button"
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import * as MediaLibrary from 'expo-media-library';
import { useAppDispatch } from '@/hooks/use dispatch/useDispatch';
import { localVideoAlbum, localVideoParentHeader } from '@/lib/redux/reducers/storeLocalVideoData/storeLocalVideoData';


const VideoFoldersList = () => {
  const [albums, setAlbums] = useState(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const dispatch = useAppDispatch()

  async function getAlbums() {
    try{
    if (permissionResponse?.status !== 'granted') {
      await requestPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });


    const filteredEmptyAlbums: {
      assetCount: number;
      id: string;
      title: string;
      type?: MediaLibrary.AlbumType | undefined;
      startTime: number;
      endTime: number;
      approximateLocation?: MediaLibrary.Location | undefined;
      locationNames?: string[] | undefined;
    }[] = []

    //filter out empty array
    for (let alb of fetchedAlbums) {
      const albumAssets = await MediaLibrary.getAssetsAsync({
        album: alb.id,
        mediaType: 'video',  // Fetch only videos
        first: 5,  // Limit to 5 videos
      })

      // Fetch additional info for each asset
      const assetDetails = await Promise.all(
        albumAssets.assets.map(async (asset) => {
          const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
          return assetInfo;
        })
      );

      if (assetDetails.length > 0) {
        filteredEmptyAlbums.push({ ...alb, assetCount: assetDetails.length })
      }
    }

    if (filteredEmptyAlbums) {
      const sortByTitleAscending = filteredEmptyAlbums.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })

      setAlbums(sortByTitleAscending);

      dispatch(localVideoAlbum(sortByTitleAscending))
    }
  }
  catch(err){
    console.log(err)
  }
  }



  useEffect(() => {
    getAlbums()
  }, [])


  const navigateToFolderContents = (id: number) => {
    router.push({
      pathname: `video-list/${id}`
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrap}>
          {albums && albums.map(album => {
            return (
              <Button key={album.id} disabled={false} onClick={() => navigateToFolderContents(album.id)} component={<VideoFolder totalNumOfVideos={album.assetCount} folderName={album.title} />} />
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
    justifyContent: "center"
  },
  wrap: {
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: "center"
  }
})
export default VideoFoldersList;


