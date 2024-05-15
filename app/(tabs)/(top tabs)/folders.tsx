import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import * as FileSystem from 'expo-file-system';
import {
  StorageAccessFramework as SAF
} from "expo-file-system";
import { AntDesign } from '@expo/vector-icons';
import VideoFolder from "@/components/video folder/VideoFolder"
import Button from "@/components/button template/Button"
import {router} from "expo-router"

const VideoFoldersList = () => {
  const [videoFolders, setVideoFolders] = useState([]);
const [folders, setFolders] = useState(null)
  
  
  useEffect(() => {
    async function printNestedContents() {
 try{
   const files = await FileSystem.cacheDirectory
  
  const a = await   FileSystem.readDirectoryAsync(files) 
 
  console.log(a)
   /*
  const permissions = await SAF.requestDirectoryPermissionsAsync();
  if (!permissions.granted) return
  const { directoryUri } = permissions;
  const filesInRoot = await SAF.readDirectoryAsync(directoryUri);
  const filesInNestedFolder = await SAF.readDirectoryAsync(filesInRoot[0]);
  // Both values will be the same
  console.log({ filesInRoot, filesInNestedFolder })*/
 }
 catch(e){
    console.log(e)
 }
}
printNestedContents()

  }, [])
  

const navigateToFolderContents = () => {
  router.push({
    pathname:"video-list/5"
  })
}
  return (
    <View style={styles.container}>
    <View style={styles.wrap}>
    <Button onClick={navigateToFolderContents} component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
      </View>
      
      <View style={styles.wrap}>
    <Button component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
      </View>
      
      <View style={styles.wrap}>
    <Button component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
    <Button component={<VideoFolder/>}/>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:15
  },
  wrap:{
    flexDirection:"row"
  }
})
export default VideoFoldersList;


