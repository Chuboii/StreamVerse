import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Pressable, SectionList, FlatList, Dimensions, useWindowDimensions } from 'react-native';
import VideoPost from '../reels post/ReelsPost';
import { useAppSelector } from '@/hooks/use selector/useSelector';

const data = [
  {
    id: 1,
    url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  },
  {
    id: 2,
    url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  },
  {
    id: 3,
    url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  },
  {
    id: 4,
    url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  },
  {
    id: 5,
    url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  },
  {
    id: 6,
    url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  }
]

const height = Dimensions.get("window").height

export default function ReelsVideo() {
  const [activePostId, setActivePostId] = useState(data[0].id)
  const getLocalVideoFilesFromAlbumArr = useAppSelector(state => state.localVideo.localVideoFilesFromAlbum)

  const onViewableItemsChanged = useCallback(({ changed, viewableItems }: { changed: any, viewableItems: any }) => {
    if (viewableItems.length > 0 && viewableItems[0].isViewable) {
      setActivePostId(viewableItems[0].item.id)


    }
  }, [])

  return (
    <View style={[styles.container, { height: height - 60 }]} >

      <FlatList
        data={getLocalVideoFilesFromAlbumArr}
        keyExtractor={(data) => String(data.id)}
        renderItem={({ item }) => {
          return <VideoPost url={item.uri} activePostId={activePostId} postId={item.id} videoTitle={item.filename} />
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        pagingEnabled
      />

    </View >
  );
}

const styles = StyleSheet.create({
  container: {

  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: "100%",
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  icon: {
    color: "white",
    elevation: 10,
    fontSize: 32
  },
  play: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    fontSize: 40,
    flex: 1,
    zIndex: 1,
    position: "absolute",
    top: '50%'
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 13,
    marginTop: 7
  },
  wrap: {
    marginVertical: 10,
    alignItems: "center"
  },
  overlay: {
    top: '20%',
  }
});
