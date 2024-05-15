import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import VideoTemplate from "@/components/video template/VideoTemplate";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
const VideoList = () => {
  const { slug } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;

  const navigateBack = () => router.back();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrap}>
        <Button
          onClick={navigateBack}
          component={
            <AntDesign
              name="arrowleft"
              size={24}
              style={[styles.icon, colorStyle]}
            />
          }
        />

        <ThemedText style={styles.text} darkColor="white" lightColor="black">
          {" "}
          Camera{" "}
        </ThemedText>

        <Button
          component={
            <MaterialCommunityIcons
              name="format-list-text"
              color="white"
              style={[styles.icon, colorStyle]}
            />
          }
        />
      </View>

      <VideoTemplate
        sourceIcon="camera-outline"
        title="Bro didnhhs g hd dbh du s hd t see that coming at all"
        quality="1080p"
        lengthOfVideo="0:01"
        data="1.1 GB"
        source="Camera"
        sourceStyle={styles.sStyles}
        floatStyle={styles.fStyles}
        wrapStyle={styles.wStyles}
        containerStyle={styles.cStyles}
      />

      <VideoTemplate
        sourceIcon="camera-outline"
        title="Bro didnt shhsj dhhs hdbee that coming at all"
        quality="1080p"
        lengthOfVideo="0:01"
        data="1.1 GB"
        source="Camera"
        sourceStyle={styles.sStyles}
        floatStyle={styles.fStyles}
        wrapStyle={styles.wStyles}
        containerStyle={styles.cStyles}
      />
    </SafeAreaView>
  );
};

export default VideoList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  sStyles: {
    display: "none",
  },
  fStyles: {
    display: "none",
  },
  wStyles: {
    display: "none",
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.light.tint,
  },
  cStyles: {
    height: 120,
    marginVertical: 3,
  },
  icon: {
    fontSize: 20,
  },
  headWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 20,
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 19,
  },
});
