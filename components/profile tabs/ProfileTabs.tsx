import { TouchableOpacity, StyleProp, ViewStyle, StyleSheet, View } from "react-native"
import { ReactNode, FC } from "react"
import Button from "@/components/button template/Button"
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from "@/components/ThemedText"
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  icon?: string;
  handleClick?: () => void;
  wrapperStyle?: StyleProp<ViewStyle>;
  containerStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<ViewStyle>;
  iconStyle: StyleProp<ViewStyle>
  isIcon: boolean;
  text: string;
  custom: ReactNode;
};


const ProfileTabs: FC<Props> = ({
  icon = "", text = "", custom = "", containerStyle = {},
  handleClick = () => null, wrapperStyle = {}, textStyle = {}, iconStyle = {}, isIcon = false }) => {


  return (
    <Button disabled={false} onClick={handleClick} style={[styles.container, containerStyle]} component={
      <View style={[styles.wrapper, wrapperStyle]}>
        <View style={[styles.wrap]}>
          <Ionicons style={[styles.icon, iconStyle]} name={icon} color="white" />
          <ThemedText style={[styles.text, textStyle]}> {text} </ThemedText>
        </View>
        {isIcon ?
          <FontAwesome name="angle-right" size={24} color="white" />
          : ""
        }


      </View>
    }
    />
  )
}

export default ProfileTabs

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5
  },
  icon: {
    marginRight: 7,
    fontSize: 22
  },
  text: {
    fontFamily: "KanitRegular",
    fontSize: 15
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center"
  }
})