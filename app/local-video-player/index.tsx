import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import { useAppSelector } from '@/hooks/use selector/useSelector'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Video, { VideoRef } from 'react-native-video';
import Button from '@/components/button template/Button';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import Slider from '@react-native-community/slider';

const LocalVideoPlayer = () => {
    const videoRef = useRef<VideoRef>()
    const getLocalVideoContentUrl = useAppSelector(state => state.localVideo.localVideoContentUrl)
    const [status, setStatus] = useState({})


    const togglePlayAndPauseLocalVideo = () => {
        if (!videoRef.current) return null


        videoRef.current.resume()


    }


    return (
        <>

            <Video
                source={{ uri: `${getLocalVideoContentUrl}` }}
                // // Store reference  
                // ref={videoRef}
                // // Callback when remote video is buffering                                      
                // onBuffer={onBuffer}
                // // Callback when video cannot be loaded              
                // onError={onError}
                style={styles.backgroundVideo}
                fullscreen={true}
                fullscreenAutorotate={true}
                pictureInPicture={true}
                showNotificationControls={true}
            />
            <View style={styles.slider}>
                <View style={styles.wrap}>
                    <ThemedText>0:00</ThemedText>
                    <ThemedText>0:00</ThemedText>
                </View>
                <Slider
                    style={styles.slide}
                    minimumValue={1000}
                    maximumValue={100}
                    minimumTrackTintColor="orangered"
                    maximumTrackTintColor="#000000"
                    thumbTintColor='orangered'

                />
            </View>
            <View style={styles.containerPlaybacks}>
                <View style={styles.playbacks}>
                    <Button component={
                        <MaterialCommunityIcons name="screen-rotation-lock" size={24} color="black" style={styles.icon} />
                    } disabled={false} />
                    <Button component={
                        <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
                    } disabled={false} />
                    <Button style={styles.play} onClick={togglePlayAndPauseLocalVideo} component={
                        <Ionicons name={status.isPlaying ? "pause-outline" : "play"} size={24} color="black" style={[styles.icon]} />} disabled={false} />
                    <Button component={
                        <MaterialCommunityIcons name="phone-rotate-landscape" size={24} color="black" style={styles.icon} />
                    } disabled={false} />
                    <Button component={<Ionicons name="ellipsis-vertical" size={24} style={styles.icon} color="black" />} disabled={false} />
                </View>
            </View>

        </>
    )
}

export default LocalVideoPlayer
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    video: {
        width: 100,
        height: 200
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    playbacks: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    icon: {
        color: "white"
    },
    containerPlaybacks: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    slider: {
        position: "absolute",
        bottom: 100,
        width: Dimensions.get("window").width,
        height: 30,
        left: 0,
        right: 0,
        zIndex: 2,

    },
    slide: {
        marginTop: 10,
    },
    wrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15

    },
    play: {
        borderColor: "white",
        borderWidth: 1.5,
        borderRadius: 50,
        padding: 7,
        justifyContent: "center",
        alignItems: "center"
    }
})

// import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import { AVPlaybackStatus, AVPlaybackStatusSuccess, ResizeMode, Video } from 'expo-av'
// import { useAppSelector } from '@/hooks/use selector/useSelector'
// import * as ScreenOrientation from 'expo-screen-orientation';
// import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
// import Button from '@/components/button template/Button';
// import Slider from '@react-native-community/slider';
// import { ThemeProvider } from '@react-navigation/native';
// import { ThemedText } from '@/components/ThemedText';


// const LocalVideoPlayer = () => {
//     const getLocalVideoContentUrl = useAppSelector(state => state.localVideo.localVideoContentUrl)
//     const videoRef = useRef(null)
//     const [landscape, setLandscape] = useState(false)
//     const [status, setStatus] = useState<AVPlaybackStatusSuccess>({})

//     useEffect(() => {
//         const setScreenOrientation = async () => {
//             const response = await ScreenOrientation.getOrientationAsync()

//             console.log(response);



//         }

//         setScreenOrientation()
//     }, [])


//     const togglePlayAndPauseLocalVideo = () => {
//         if (!videoRef.current) return null


//         if (status.isPlaying) {
//             videoRef.current.pauseAsync()
//         }
//         else if (status.didJustFinish) {
//             console.log("yeszs");

//             videoRef.current.replayAsync()
//         }
//         else {
//             videoRef.current.playAsync()
//         }
//     }


//     return (
//         <>

//             <View style={styles.slider}>
//                 <View style={styles.wrap}>
//                     <ThemedText>0:00</ThemedText>
//                     <ThemedText>0:00</ThemedText>
//                 </View>
//                 <Slider
//                     style={styles.slide}
//                     minimumValue={1000}
//                     maximumValue={100}
//                     minimumTrackTintColor="orangered"
//                     maximumTrackTintColor="#000000"
//                     thumbTintColor='orangered'

//                 />
//             </View>
//             <Pressable >
//                 <Video
//                     style={styles.video}
//                     shouldPlay={true}
//                     resizeMode={ResizeMode.COVER}
//                     source={{ uri: `${getLocalVideoContentUrl}` }}
//                     ref={videoRef}
//                     onPlaybackStatusUpdate={status => setStatus(status)}
//                 />

//                 <View style={styles.containerPlaybacks}>
//                     <View style={styles.playbacks}>
//                         <Button component={
//                             <MaterialCommunityIcons name="screen-rotation-lock" size={24} color="black" style={styles.icon} />
//                         } disabled={false} />
//                         <Button component={
//                             <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
//                         } disabled={false} />
//                         <Button style={styles.play} onClick={togglePlayAndPauseLocalVideo} component={
//                             <Ionicons name={status.isPlaying ? "pause-outline" : "play"} size={24} color="black" style={[styles.icon]} />} disabled={false} />
//                         <Button component={
//                             <MaterialCommunityIcons name="phone-rotate-landscape" size={24} color="black" style={styles.icon} />
//                         } disabled={false} />
//                         <Button component={<Ionicons name="ellipsis-vertical" size={24} style={styles.icon} color="black" />} disabled={false} />
//                     </View>
//                 </View>
//             </Pressable >
//         </ >
//     )
// }

// export default LocalVideoPlayer

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     video: {
//         width: "100%",
//         height: "100%"
//     },
// playbacks: {
//     flexDirection: "row",
//         justifyContent: "space-between",
//             alignItems: 'center'
// },
// icon: {
//     color: "white"
// },
// containerPlaybacks: {
//     position: "absolute",
//         left: 0,
//             right: 0,
//                 bottom: 0,
//                     padding: 20,
//                         backgroundColor: "rgba(0,0,0,0.2)",
//     },
// slider: {
//     position: "absolute",
//         bottom: 100,
//             width: Dimensions.get("window").width,
//                 height: 30,
//                     left: 0,
//                         right: 0,
//                             zIndex: 2,

//     },
// slide: {
//     marginTop: 10,
//     },
// wrap: {
//     flexDirection: "row",
//         justifyContent: "space-between",
//             paddingHorizontal: 15

// },
// play: {
//     borderColor: "white",
//         borderWidth: 1.5,
//             borderRadius: 50,
//                 padding: 7,
//                     justifyContent: "center",
//                         alignItems: "center"
// }
// })