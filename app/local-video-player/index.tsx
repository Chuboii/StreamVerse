import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import { useAppSelector } from '@/hooks/use selector/useSelector'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Video, { VideoDecoderProperties, VideoRef } from 'react-native-video';
import Button from '@/components/button template/Button';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';

const LocalVideoPlayer = () => {
    const videoRef = useRef<VideoRef>()
    const getLocalVideoContentUrl = useAppSelector(state => state.localVideo.localVideoSingleContentDetails)
    const [status, setStatus] = useState<{ isPlaying: boolean }>({})
    const [storeLastTapOnVideo, setStoreLastTapOnVideo] = useState(null)
    const [isHideTitleAndPlaybackControls, setIsHideTitleAndPlaybackControls] = useState(true)


    useEffect(() => {
        VideoDecoderProperties.isHEVCSupported().then((support) => {
            console.log(support);

        });
    }, []);

    useEffect(() => {
        let timeout;
        if (isHideTitleAndPlaybackControls) {
            timeout = setTimeout(() => {
                setIsHideTitleAndPlaybackControls(false)
            }, 1500)
        }

        return () => clearTimeout(timeout)
    }, [isHideTitleAndPlaybackControls])


    const togglePlayAndPauseLocalVideo = () => {

        if (!videoRef.current) return null

        if (status.isPlaying) {
            videoRef.current.pause()
        }
        else {
            videoRef.current.resume()
        }

    }

    const handleVideoEndAndPlayFromBeginning = () => {

        if (!videoRef.current) return null

        videoRef.current.seek(0)
    }

    const handleErrorProducedFromVideoPlayback = (err) => {
        console.log("error playing video")
        console.log(err);
    }

    const handleDoubleTapPlayBacksOnVideo = () => {
        const getCurrentTime = new Date()
        setIsHideTitleAndPlaybackControls(true)

        if (storeLastTapOnVideo && (getCurrentTime - storeLastTapOnVideo) < 300) {
            if (!videoRef.current) return null
            if (status.isPlaying) {
                videoRef.current.pause()
            }
            else {
                videoRef.current.resume()
            }
        }
        else {
            setStoreLastTapOnVideo(getCurrentTime)
        }


    }

    return (
        <Pressable style={styles.container} onPress={handleDoubleTapPlayBacksOnVideo}>
            <>
                {isHideTitleAndPlaybackControls &&
                    <LinearGradient
                        colors={['rgba(0,0,0,.8)', 'rgba(0,0,0,0)']}
                        style={styles.gradient}
                    >
                        <ThemedText style={styles.title}>{getLocalVideoContentUrl.filename}</ThemedText>
                    </LinearGradient>}
                <Video
                    source={{ uri: `${getLocalVideoContentUrl.uri}` }}
                    // // Store reference  
                    ref={videoRef}
                    // // Callback when remote video is buffering                                      
                    // onBuffer={onBuffer}
                    // // Callback when video cannot be loaded              
                    // onError={onError}
                    onError={handleErrorProducedFromVideoPlayback}
                    style={styles.backgroundVideo}
                    resizeMode='contain'
                    pictureInPicture={true}
                    showNotificationControls={true}
                    onPlaybackStateChanged={(state) => setStatus(state)}
                    onEnd={handleVideoEndAndPlayFromBeginning}
                />
                {isHideTitleAndPlaybackControls &&
                    <>
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
                                    <Ionicons name={status.isPlaying ? "pause-outline" : "play"} size={30} color="white" />} disabled={false} />
                                <Button component={
                                    <MaterialCommunityIcons name="phone-rotate-landscape" size={24} color="black" style={styles.icon} />
                                } disabled={false} />
                                <Button component={<Ionicons name="ellipsis-vertical" size={24} style={styles.icon} color="black" />} disabled={false} />
                            </View>
                        </View>
                    </>
                }
            </>
        </Pressable>
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
        color: "white",
        fontSize: 20
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
        alignItems: "center",
        fontSize: 20,
        color: "white"
    },
    gradient: {
        height: 80,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontFamily: "KanitRegular",
        textAlign: "center",
        marginHorizontal: 10
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