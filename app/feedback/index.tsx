import { StyleSheet, TextInput, Image, ScrollView, Text, View } from 'react-native'
import React, { useRef, useState, useCallback } from 'react'
import VideoTemplate from "@/components/video template/VideoTemplate";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/button template/Button";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Checkbox from "expo-checkbox"

const Feedback = () => {
  const [isSuggestionChecked, setIsSuggestionChecked] = useState(false)
  const [isIssuesChecked, setIsIssuesChecked] = useState(true);
  const colorScheme = useColorScheme();
  const colorStyle =
    colorScheme === "light" ? styles.colorLight : styles.colorDark;

  const navigateBack = () => router.back()

  const changeCheckboxStates = (bool: boolean, name: string) => {
    console.log(bool, name)
    if (name === "issuesCheckbox") {

      setIsIssuesChecked(bool)
      setIsSuggestionChecked(false)
    }
    else if (name === "suggestionCheckbox") {

      setIsIssuesChecked(false)
      setIsSuggestionChecked(bool)
    }
  }
  // console.log(isSuggestionChecked)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrap}>
        <Button disabled={false}
          onClick={navigateBack}
          component={
            <AntDesign
              name="arrowleft"
              size={24}
              style={[styles.headerIcon, colorStyle]}
            />
          }
        />
        <ThemedText style={styles.title}

          darkColor="white" lightColor="black">
          {" "}
          Feedback{" "}
        </ThemedText>
      </View>

      <ThemedView style={styles.alert}>
        <ThemedText style={styles.alrtTxt}>Report bugs every time you encounter one to help us tackle it
          faster </ThemedText>
        <Button disabled={false}
          // onClick={navigateBack}
          component={
            <AntDesign
              name="close"
              size={24}
              style={[styles.icon, colorStyle]}
            />
          } />
      </ThemedView>

      <View style={styles.wrap}>
        <View style={styles.box}>
          <Checkbox
            value={isIssuesChecked}
            onValueChange={(val) => changeCheckboxStates(val, "issuesCheckbox")}
            color={isIssuesChecked ? 'orangered' : undefined}
            style={styles.checkbox} />
          <ThemedText style={styles.text}> Issues </ThemedText>
        </View>

        <View style={styles.box}>

          <Checkbox
            value={isSuggestionChecked}
            onValueChange={(val) => changeCheckboxStates(val, "suggestionCheckbox")}
            color={isSuggestionChecked ? 'orangered' : undefined}
            style={styles.checkbox} />
          <ThemedText style={styles.text}> Suggestions </ThemedText>
        </View>
      </View>

      <View style={styles.inputBox}>
        <TextInput multiline placeholderTextColor={"rgba(255, 255 ,255,.6)"} style={styles.input} placeholder="Describe the issues you experienced in the app in
details so we can solve the bug faster"/>
      </View>
      {isSuggestionChecked ? "" :
        <View style={styles.wrapImage}>
          <Button disabled={false} style={styles.imageBox} component={
            <AntDesign name="plus" color="white" style={[colorStyle, styles.imageIcon]} />} />
          <Text style={styles.imageText}> Attach an image or short video </Text>
        </View>
      }
      <Button disabled={false} style={styles.btn} component={<Text style={styles.btnText}> Submit </Text>} />
    </SafeAreaView>
  )
}

export default Feedback

const styles = StyleSheet.create({
  colorLight: {
    color: Colors.light.tint,
  },
  colorDark: {
    color: Colors.dark.tint,
  },
  container: {
    padding: 10
  },
  headWrap: {
    flexDirection: "row",
  },
  title: {
    textAlign: "center",
    flex: 1,
    fontFamily: "KanitRegular"
  },
  alert: {
    marginTop: 50,
    flexDirection: 'row',
    padding: 15,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  alrtTxt: {
    fontFamily: "KanitRegular",
    width: "95%",
    color: "aqua"
  },
  icon: {
    fontSize: 17,
  },
  headerIcon: {
    fontSize: 22
  },
  input: {
    color: "white",
    fontFamily: "KanitRegular",
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 40
  },
  inputBox: {
    backgroundColor: "rgba(255,255,255,.2)",
    padding: 20,
    borderRadius: 10,
    minHeight: 150,
    maxHeight: 250
  },
  text: {
    fontFamily: "KanitRegular"
  },
  wrapImage: {
    marginVertical: 20,
    backgroundColor: "rgba(255,255,255,.2)",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    borderRadius: 10
  },
  imageIcon: {
    fontSize: 30,

  },
  imageBox: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "white",
    padding: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginRight: 15,
  },
  imageText: {
    color: "white",
    fontFamily: "KanitRegular"
  },
  btn: {
    backgroundColor: "orangered",
    padding: 20,
    borderRadius: 30,
    justifyContent: "center",
    marginTop: 20
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontFamily: "KanitRegular",
    fontSize: 16
  },
  box: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkbox: {
    marginHorizontal: 10,
    borderRadius: 50,
    width: 25,
    height: 25
  }
})