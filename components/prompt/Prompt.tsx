import { AntDesign, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native"
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/button template/Button";
import { FontAwesome } from '@expo/vector-icons';
const Prompt = () => {

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <AntDesign
          name="download"
          size={27}
          style={[styles.headerIcon, styles.icon]}
        />
      </View>

      <View style={styles.wrap}>
        <ThemedText style={styles.text}> How to download videos </ThemedText>
      </View>

      <Button
        disabled={false}
        //  onClick={navigateBack}
        component={
          <FontAwesome
            name="angle-right"
            size={24}
            style={[styles.icon]}
          />
        }
      />
    </View>
  )
}

export default Prompt

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,.1)",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  wrap: {

  },
  text: {
    fontFamily: "KanitRegular"
  },
  image: {

  },
  icon: {
    color: 'white'
  },
  headerIcon: {
    fontSize: 19
  }
})