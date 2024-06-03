import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import { useAppSelector } from '@/hooks/use selector/useSelector'
import { BackHandler, Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Video, { VideoDecoderProperties, VideoRef } from 'react-native-video';
import Button from '@/components/button template/Button';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from 'expo-screen-orientation';
import { router, usePathname } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const videoResolution = ["container","cover", "stretch"]

const LocalVideoPlayer = () => {
    const videoRef = useRef<VideoRef>()
    const getLocalVideoContentUrl = useAppSelector(state => state.localVideo.localVideoSingleContentDetails)
    const [status, setStatus] = useState<{ isPlaying: boolean }>({})
    const [storeLastTapOnVideo, setStoreLastTapOnVideo] = useState(null)
    const [isHideTitleAndPlaybackControls, setIsHideTitleAndPlaybackControls] = useState(false)
    const [storeCurrentVideoTime, setStoreCurrentVideoTime] = useState(null)
    const [storeTotalVideoTime, setStoreTotalVideoTime] = useState(null)
    const [storeTotalVideoTimeInSeconds, setStoreTotalVideoTimeInSeconds] = useState(0)
    const [storeCurrentVideoTimeInSeconds, setStoreCurrentVideoTimeInSeconds] = useState(0)
    const [isOrientationLocked, setIsOrientationLocked] = useState(false)
    const [increment, setIncrement] = useState(1)
    const [storeVideoResolutionValue, setStoreVideoResolutionValue] =
    useState<string | null>(videoResolution[0])
    const [storeDoubleTapSeekCountsFromVideo,
    setStoreDoubleTapSeekCountsFromVideo] =
    useState(0)
    const [enableDisplayOfForwardSeekTapDuration, setEnableDisplayOfForwardSeekDuration] = useState(false)
    const [enableDisplayOfBackwardSeekTapDuration, setEnableDisplayOfBackwardSeekDuration] = useState(false)
    const pathname = usePathname()

    useEffect(() => {

        Dimensions.addEventListener("change", (event) => {
            console.log(event);
        })
        const backhandler = async () => {
            const orientation = await ScreenOrientation.getOrientationLockAsync()
            
            if (orientation === 5 || orientation === 6 || orientation === 7) {
                await ScreenOrientation.unlockAsync()
                router.back()
                return false
            }
            else if (orientation === 4 || orientation === 3 || orientation === 0) {
                router.back()
                return false
            }
            return true
        }
        BackHandler.addEventListener("hardwareBackPress", backhandler)

        return () => BackHandler.removeEventListener("hardwareBackPress", backhandler)
    }, [])

    useEffect(() => {

        const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
            console.log('orientation change');

            console.log(event);

            handleOrientationChange(event.orientationInfo.orientation);
        });

        // Clean up the subscription on unmount
        return () => {
            ScreenOrientation.removeOrientationChangeListener(subscription);
        };

    }, []);

    const handleOrientationChange = (orientation) => {

        console.log(orientation);

        switch (orientation) {
            case ScreenOrientation.Orientation.PORTRAIT_UP:
                console.log('Portrait Up');
                // Add your logic for Portrait Up orientation
                break;
            case ScreenOrientation.Orientation.PORTRAIT_DOWN:
                console.log('Portrait Down');
                // Add your logic for Portrait Down orientation
                break;
            case ScreenOrientation.Orientation.LANDSCAPE_LEFT:
                console.log('Landscape Left');
                // Add your logic for Landscape Left orientation
                break;
            case ScreenOrientation.Orientation.LANDSCAPE_RIGHT:
                console.log('Landscape Right');
                // Add your logic for Landscape Right orientation
                break;
            default:
                console.log('Unknown Orientation');
                // Add your logic for unknown orientation
                break;
        }
    };

    useEffect(() => {
        VideoDecoderProperties.isHEVCSupported().then((support) => {
            // console.log(support);
        });
    }, []);

    useEffect(() => {
        let timeout;

        if (status.isPlaying) {
            timeout = setTimeout(() => {
           setIsHideTitleAndPlaybackControls(false)
            },3000)
        }
        else {
            setIsHideTitleAndPlaybackControls(true)
        }

        return () => clearTimeout(timeout)
    }, [isHideTitleAndPlaybackControls, status.isPlaying])


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

        if (status.isPlaying && isHideTitleAndPlaybackControls) {
            setIsHideTitleAndPlaybackControls(false)
        }
        else {
            setIsHideTitleAndPlaybackControls(true)
        }
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

    const handleGettingTotalVideoTime = (data) => {
        const { duration } = data

        setStoreTotalVideoTimeInSeconds(duration)

        const hours = Math.floor(duration / 3600)
        const minutes = Math.floor((duration % 3600) / 60)
        const seconds = Math.floor(duration % 60)

        const formatMinutes = minutes > 0 && minutes < 10 ? `0${minutes}` : `${minutes}`
        const formatSeconds = seconds > 0 && seconds < 10 ? `0${seconds}` : `${seconds}`

        if (hours === 0) {
            setStoreTotalVideoTime(`${formatMinutes}:${formatSeconds}`)
        }
        else {
            setStoreTotalVideoTime(`${hours}:${formatMinutes}:${formatSeconds}`)
        }
    }

    const handleGettingCurrentVideoTime = (data) => {
        const { currentTime } = data

        setStoreCurrentVideoTimeInSeconds(currentTime)

//console.log(currentTime)
        const hours = Math.floor(currentTime / 3600)
        const minutes = Math.floor((currentTime % 3600) / 60)
        const seconds = Math.floor(currentTime % 60)

        const formatMinutes = minutes > 0 && minutes < 10 ? `0${minutes}` : `${minutes}`
        const formatSeconds = seconds >= 0 && seconds < 10 ? `0${seconds}` : `${seconds}`


        if (hours === 0) {
            setStoreCurrentVideoTime(`${formatMinutes}:${formatSeconds}`)
        }
        else {
            setStoreCurrentVideoTime(`${hours}:${formatMinutes}:${formatSeconds}`)
        }
    }

    const handleWhenUserPicksUpTheSliderInitially = (data) => {
        if (!videoRef.current) return null

        videoRef.current.seek(data)

    }

    const handleLandscapeOrientation = async () => {
      try{
        const getOrientationState = await ScreenOrientation.getOrientationLockAsync()

        if (isOrientationLocked) {
            console.log("orientation is locked, open to rotate");
        }
        else {
            if (getOrientationState === 0 || getOrientationState === 3 ||
            getOrientationState === 4 || getOrientationState === 5) {
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
            }
            else {
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            }
        }
}
catch(err){
  console.log(err)
}
    }

    const handleLockCurrentScreenOrientation = async () => {
      try{
        const getScreenOrientation = await ScreenOrientation.getOrientationLockAsync()

        if (isOrientationLocked) {
            await ScreenOrientation.unlockAsync()
            setIsOrientationLocked(false)
        }
        else {
          setIsOrientationLocked(true)
        }
      }
      catch(err){
        console.log(err)
      }
    }


    const handleChangeInVideoResolution = () => {
        setIncrement(c => c + 1)
        setIsHideTitleAndPlaybackControls(true)
      
        if (increment < videoResolution.length) {
            setStoreVideoResolutionValue(videoResolution[increment])
        }
        else {
            setIncrement(0)
        }

    }
    
    const handleValueChange = (value) => {
        // console.log(value);
        // // Add any additional logic here
    };
    
    const handleRightDoubleTapToForwardTheVideo = () => {
      const getCurrentTime = new Date()

        if (status.isPlaying && isHideTitleAndPlaybackControls) {
            setIsHideTitleAndPlaybackControls(false)
        }
        else {
            setIsHideTitleAndPlaybackControls(true)
        }
        
      if(storeLastTapOnVideo && (getCurrentTime - storeLastTapOnVideo) < 300){
    if(!videoRef.current) return null
        videoRef.current.seek(storeCurrentVideoTimeInSeconds + 10)
setEnableDisplayOfForwardSeekDuration(true)

setTimeout(()=> {
setEnableDisplayOfForwardSeekDuration(false)
}, 500)

      }
      else{
setStoreLastTapOnVideo(getCurrentTime)
  setEnableDisplayOfForwardSeekDuration(false)
      }
      
    }
    
    
    const handleLeftDoubleTapToBackwardTheVideo = () => {
const getCurrentTime = new Date()
        if (status.isPlaying && isHideTitleAndPlaybackControls) {
            setIsHideTitleAndPlaybackControls(false)
        }
        else {
            setIsHideTitleAndPlaybackControls(true)
        }
      if(storeLastTapOnVideo && (getCurrentTime - storeLastTapOnVideo) < 300){
        if(!videoRef.current) return null
        videoRef.current.seek(storeCurrentVideoTimeInSeconds - 10)
    setEnableDisplayOfBackwardSeekDuration(true)

setTimeout(()=> {
setEnableDisplayOfBackwardSeekDuration(false)
}, 500)
}
else{
  setStoreLastTapOnVideo(getCurrentTime)
  setEnableDisplayOfBackwardSeekDuration(false)
}
    }
    return (
    <>
    <TouchableOpacity style={styles.leftTouch}
    onPress={handleLeftDoubleTapToBackwardTheVideo}>
    <AntDesign style={[styles.iconForward, {color: enableDisplayOfBackwardSeekTapDuration ?
     "rgba(255,255,255,.8)"
     : "rgba(255,255,255,0)"}]} name="banckward" color="black" />
     <Text style={[styles.textForward,{color:
     enableDisplayOfBackwardSeekTapDuration ?
     "rgba(255,255,255,.8)"
     : "rgba(255,255,255,0)"}]}> -10s (1:10) </Text>
    </TouchableOpacity>
    
     <TouchableOpacity
     style={[styles.rightTouch]}
     onPress={handleRightDoubleTapToForwardTheVideo}>
    <AntDesign style={[styles.iconForward, {color: enableDisplayOfForwardSeekTapDuration ?
     "rgba(255,255,255,.8)"
     : "rgba(255,255,255,0)"}]} name="forward"
     color="black" />
     <Text style={[styles.textForward, {color:enableDisplayOfForwardSeekTapDuration ?
     "rgba(255,255,255,1)"
     : "rgba(255,255,255,0)"}]}> +10s (1:10) </Text>
    </TouchableOpacity>
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
                    ref={videoRef}
                    onError={handleErrorProducedFromVideoPlayback}
                    style={styles.backgroundVideo}
                    resizeMode={storeVideoResolutionValue}
                    pictureInPicture={true}
                    showNotificationControls={true}
                    onPlaybackStateChanged={(state) => setStatus(state)}
                    onEnd={handleVideoEndAndPlayFromBeginning}
                    onLoad={handleGettingTotalVideoTime}
                    onProgress={handleGettingCurrentVideoTime}
                    onValueChange={handleValueChange}

                />
                {isHideTitleAndPlaybackControls &&
                    <>
                        <LinearGradient
                            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.9)']}
                            style={styles.containerPlaybacks}
                        >
                            <View style={[styles.wrap]}>
                                <ThemedText style={styles.text}>{storeCurrentVideoTime}</ThemedText>
                                <ThemedText style={styles.text}>{storeTotalVideoTime}</ThemedText>
                            </View>

                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={storeTotalVideoTimeInSeconds}
                                minimumTrackTintColor="orangered"
                                maximumTrackTintColor="gray"
                                thumbTintColor='orangered'

                                value={storeCurrentVideoTimeInSeconds}
                                onValueChange={handleWhenUserPicksUpTheSliderInitially}
                                onSlidingStart={handleWhenUserPicksUpTheSliderInitially}
                            />

                            <View style={styles.playbacks}>
                                <View style={styles.wrapper}>
                                    <Button onClick={handleChangeInVideoResolution} component={
                                        <MaterialCommunityIcons name="monitor-screenshot" size={24} color="black" style={styles.icon} />
                                    } disabled={false} />
                                    <Button onClick={handleLockCurrentScreenOrientation} component={
                                        <Ionicons name={isOrientationLocked ? "lock-closed-outline" : "lock-open-outline"} size={24} color="black" style={[styles.icon, styles.left]} />
                                    } disabled={false} />
                                </View>
                                <Button style={styles.play} onClick={togglePlayAndPauseLocalVideo} component={
                                    <Ionicons name={status.isPlaying ? "pause-outline" : "play"} size={30} color="white" />} disabled={false} />
                                <View style={styles.wrapper}>
                                    <Button onClick={handleLandscapeOrientation} component={
                                        <MaterialCommunityIcons name="phone-rotate-landscape" size={24} color="black" style={styles.icon} />
                                    } disabled={false} />
                                    <Button component={<Ionicons name="ellipsis-vertical" size={24} style={[styles.icon, styles.left]} color="black" />} disabled={false} />
                                </View>
                            </View>
                        </LinearGradient>
                    </>
                }
            </>
        </Pressable >
        </>
    )
}

export default LocalVideoPlayer

const screenWidth = Dimensions.get("screen").width

const screenHeight = Dimensions.get("screen").height


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundVideo: {
        width: screenWidth,
        height: screenHeight,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: 0,

    },
    playbacks: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 15
    },
    icon: {
        color: "white",
        fontSize: 20,
        padding:10
    },
    containerPlaybacks: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: 0,
        height: 100
    },
    slider: {
        height: 30,
        zIndex: 2,

    },
    slide: {
        marginTop: 10,
    },
    wrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        top: 5
    },
    wrapper: {
        flexDirection: "row",
        alignItems: 'center',
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
    },
    left: {
        marginLeft: 50
    },
    text: {
        fontFamily: "KanitRegular",
        fontSize: 14
    },
    leftTouch:{
      position:"absolute",
      top:"50%",
      transform: [
        {translateY: -( 350 /2) }
        ],
      left:0,
      height:350,
      width:"30%",
      borderTopRightRadius:560,
      zIndex:3,
      borderBottomRightRadius:560,
      justifyContent:"center",
      alignItems:'center',
    },
    rightTouch:{
      position:"absolute",
      top:"50%",
      right:0,
      transform: [
        {translateY: -( 350 /2) }
        ],
      height:350,
      width:"30%",
      borderTopLeftRadius:560,
      zIndex:3,
      borderBottomLeftRadius:560,
      justifyContent:"center",
      alignItems:'center'
    },
    textForward:{
      color:"white",
      fontFamily:"KanitRegular",
      top:10
    },
    iconForward:{
      color:"white",
      fontSize:18
    }
})