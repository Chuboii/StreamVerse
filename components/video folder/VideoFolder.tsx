import { View, StyleSheet, Text, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { FC, useEffect, useState } from "react";
import PlayListTemplate from "../playlist template/PlaylistTemplate";
import * as MediaLibrary from "expo-media-library";

type Prop = {
  folderName: string;
  totalNumOfVideos: string | number;
  videoImageUrl: []
};
const VideoFolder: FC<Prop> = ({ folderName, totalNumOfVideos, videoImageUrl }) => {


  return (
    <View style={styles.container}>
      <PlayListTemplate
        imageUrl={videoImageUrl}
        title={folderName}
        lengthOfVideos=""
        numOfVideos={totalNumOfVideos}
        // imageUrl={undefined}
        imageStyle={undefined}
        containerStyle={undefined}
        wrapperStyle={undefined}
        wrapStyle={undefined}
        quality={""}
        data={""}
        source={""}
        sourceStyle={undefined}
        sourceIcon={""}
        qualityBoxStyle={undefined}
        floatStyle={undefined}
        imageBoxStyle={undefined}
        fileLocalUrl={""}
      />

      {/* <MaterialCommunityIcons name="folder-open" size={24} color="black"
        style={styles.icon} />
      <ThemedText darkColor="white" lightColor="black"
        style={styles.text} numberOfLines={2}>{folderName}</ThemedText>
      <ThemedText darkColor="gray" lightColor="gray" style={[styles.text, styles.text1]}> {totalNumOfVideos} videos </ThemedText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    margin: 10,
    padding: 0,
    marginHorizontal: 6,
  },
  icon: {
    fontSize: 60,
    color: "orangered",
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 14,
    textAlign: "center",
    width: 80,
  },
  text1: {
    fontSize: 12,
  },
});
export default VideoFolder;
