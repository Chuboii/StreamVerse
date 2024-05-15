import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, TextInput, ScrollView, View, StyleSheet } from "react-native"
import { useLocalSearchParams, router } from "expo-router"
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Button from "@/components/button template/Button"
import ReelsTemplate from "@/components/reels template/ReelsTemplate"
import { ThemedText } from "@/components/ThemedText"
import VideoTemplate from "@/components/video template/VideoTemplate"
export default function SearchPage() {
  const colorScheme = useColorScheme()


  const navigateBack = () => router.back()
  const colorStyle = colorScheme === 'light' ? styles.colorLight : styles.colorDark;
  const bgStyle = colorScheme === 'light' ? styles.bgLight : styles.bgLight;


  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Button onClick={navigateBack} component={<AntDesign name="arrowleft" size={24}
          style={[styles.icon, colorStyle]} />} />
        <TextInput
          style={[styles.input]}
          placeholder="Search videos here"
          autoFocus
          placeholderTextColor={Colors[colorScheme ?? "light"].tint}
        />

      </View>

      <ThemedText style={styles.headerTitle}> Reels </ThemedText>
      <ScrollView horizontal>
        <ReelsTemplate />
        <ReelsTemplate />
        <ReelsTemplate />
      </ScrollView>


      <ThemedText style={styles.headerTitle}> Local videos </ThemedText>

      <View>
        <VideoTemplate sourceIcon="camera-outline"
          title="Bro didnt shhsj dhhs hdbee that coming at all"
          quality="1080p"
          lengthOfVideo="0:01"
          data="1.1 GB"
          source="Camera"

        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20
  },
  bgDark: {
    backgroundColor: Colors.dark.background,
  },
  bgLight: {
    backgroundColor: Colors.light.background
  },
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.light.tint,
  },
  input: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    fontFamily: "KanitRegular",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  headerTitle: {
    padding: 10,
    fontFamily: "KanitBold",
    fontSize: 25,
    marginTop: 20
  }
})