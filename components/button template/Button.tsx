import { TouchableOpacity, StyleProp, ViewStyle } from "react-native"
import { ReactNode, FC } from "react"
type Props = {
  component?: ReactNode;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled: boolean;
};


const Button: FC<Props> = ({ onClick = () => undefined, style = null, component = null, disabled = false }) => {


  return (
    <>
      <TouchableOpacity style={style} onPress={onClick} disabled={disabled}>
        {component}
      </TouchableOpacity>
    </>
  )
}

export default Button