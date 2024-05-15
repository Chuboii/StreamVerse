import { TouchableOpacity, StyleProp, ViewStyle } from "react-native"
import { ReactNode, FC } from "react"
type Props = {
  component?: ReactNode;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>
};


const Button: FC<Props> = ({ onClick, style, component }) => {


  return (
    <TouchableOpacity onPress={onClick}>
      {component}
    </TouchableOpacity>
  )
}

export default Button