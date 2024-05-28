import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";

const CreateReelScreen = () => {

  useEffect(() => {
    const openUsersCameraAndExtractImage = async () => {
      try {
        const response = await ImagePicker.launchCameraAsync()

        if (!response.canceled) {
          console.log(true);
        }
      }
      catch (err) {

      }
    }
    openUsersCameraAndExtractImage()

  }, [])

  return (
    <>

    </>
  )
}

export default CreateReelScreen