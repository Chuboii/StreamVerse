import {Text, View} from "react-native"
import PlaylistTemplate from "@/components/playlist template/PlaylistTemplate"

export default function PlayList() {
  
  return (
  <View>
    <PlaylistTemplate 
    imageUrl={require("../../../assets/images/dummy.jpeg")}
    title="My favorite videos collection"
    numOfVideos="7 videos"
    lengthOfVideos="110 mins"
    />
        <PlaylistTemplate 
    imageUrl={require("../../../assets/images/dummy.jpeg")}
    title="My favorite videos collection"
    numOfVideos="7 videos"
    lengthOfVideos="110 mins"
    />
    </View>
    )
}