import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable, SectionList, FlatList, Dimensions, useWindowDimensions, Image } from 'react-native';
// import { Video, ResizeMode, AVPlaybackStatusSuccess, AVPlaybackStatus } from 'expo-av';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { ThemedText } from '../ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../button template/Button';
import CommentTemplate from '../reels comment/ReelsComment';
import { useAppDispatch } from '@/hooks/use dispatch/useDispatch';
import { toggleReelsComment } from '@/lib/redux/reducers/toggle reducer/toggleReducer';
import Video, { VideoRef } from 'react-native-video';

const height = Dimensions.get("window").height

type Props = {
    url: string;
    activePostId: number;
    postId: number;
    videoTitle: string;
}

const ReelVideoPost: FC<Props> = ({ url, activePostId, postId, videoTitle }) => {
    const dispatch = useAppDispatch()
    const video = React.useRef<Video>();
    const [status, setStatus] = React.useState<AVPlaybackStatusSuccess>();
    const pathname = usePathname()
    const [render, setRender] = useState(false)

    const isPlaying = status?.isPlaying

    // console.log(isPlaying);

    useEffect(() => {
        if (pathname !== "/reels") {
            video.current?.pauseAsync()
        }

        console.log(videoTitle);

    }, [pathname])


    useEffect(() => {
        if (activePostId !== postId) {
            video.current?.pauseAsync()
        }

        if (activePostId === postId) {
            video.current?.playAsync()
        }
    }, [activePostId, video.current])

    const toggleVideoOnAndOff = async () => {
        if (isPlaying) {
            video.current?.pauseAsync()
            setRender(false)
        }
        else {
            video.current?.playAsync()
            setRender(true)
        }
    }

    const toggleCommentDisplay = () => {
        dispatch(toggleReelsComment(true))
    }
    return (
        <>
            <View style={[{ height: height - 60, flex: 1 }]}>

                <Video
                    source={{ uri: url }}
                    // // Store reference  
                    // ref={videoRef}
                    // // Callback when remote video is buffering                                      
                    // onBuffer={onBuffer}
                    // // Callback when video cannot be loaded              
                    // onError={onError}
                    style={styles.video}
                    pictureInPicture={true}
                    showNotificationControls={true}
                />
                {/* <Video
                    // usePoster={true}
                    // posterSource={require("../../assets/images/dummy.jpeg")}
                    ref={video}
                    style={[StyleSheet.absoluteFill, styles.video]}
                    source={{
                        uri: url
                    }}
                    shouldPlay={true}
                    resizeMode={ResizeMode.COVER}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                /> */}

                <Pressable onPress={toggleVideoOnAndOff} style={[StyleSheet.absoluteFillObject]}>
                    {isPlaying ?? <View style={styles.play}>
                        <FontAwesome5 name="play" size={50} color="white" style={{ elevation: 100 }} />
                    </View>}

                    {!isPlaying && <View style={styles.play}>
                        <FontAwesome5 name="play" size={50} color="white" style={{ elevation: 100 }} />
                    </View>}
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,.8)']}
                        style={[StyleSheet.absoluteFillObject, styles.overlay]}
                    >
                        <View style={styles.wrapper}>
                            {/* <View style={[styles.wrap, styles.imageBox]}>
                                <Image style={styles.image} source={require("@/assets/images/dummy.jpeg")} />
                                <AntDesign style={[styles.icon, styles.imagePlus]} name="plus" size={24} color="black" />
                            </View> */}
                            <View style={styles.wrap}>
                                <AntDesign style={[styles.icon, styles.increasedSize]} name="heart" size={24} color="black" />
                                { }
                            </View>
                            {/* <TouchableOpacity onPress={toggleCommentDisplay} style={styles.wrap}>
                                <FontAwesome style={[styles.icon, styles.increasedSize]} name="commenting" size={34} color="black" />
                                <ThemedText style={styles.text}>10.0K</ThemedText>
                            </TouchableOpacity>
                            <View style={styles.wrap}>
                                <FontAwesome style={[styles.icon, styles.wrap]} name="share" size={24} color="black" />
                                <ThemedText style={[styles.text, { marginTop: -10, fontSize: 15 }]}>100</ThemedText>
                            </View> */}

                            {/* <Button style={styles.wrap} disabled={false} component={
                                <FontAwesome6 style={[styles.icon, styles.wrap]} name="download" size={24} color="black" />
                            } /> */}
                        </View>

                        <View style={styles.wrapBox}>
                            <ThemedText style={styles.post} numberOfLines={2}>{videoTitle}</ThemedText>
                        </View>
                    </LinearGradient>
                </Pressable>
            </View >
        </>
    )
}

export default ReelVideoPost

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex: 1//
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: "100%",
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        position: "absolute",
        bottom: 10,
        right: 10
    },
    icon: {
        color: "white",
        elevation: 10,
        fontSize: 28
    },
    play: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        fontSize: 40,
        flex: 1,
        zIndex: 1,
        position: "absolute",
        top: '50%'
    },
    text: {
        fontFamily: "KanitRegular",
        fontSize: 14,
        marginTop: 5
    },
    wrap: {
        marginVertical: 9,
        alignItems: "center"
    },
    overlay: {
        top: '20%',
    },
    wrapBox: {
        position: "absolute",
        bottom: 10,
        padding: 10
    },
    post: {
        fontFamily: "KanitRegular",
        width: 300,
        fontSize: 15,
        marginTop: 7
    },
    name: {
        fontFamily: "KanitRegular",
        fontSize: 23
    },
    increasedSize: {
        fontSize: 35
    },
    imageBox: {
        width: 50,
        height: 50,

    },
    image: {
        borderRadius: 50,
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderColor: "white"
    },
    imagePlus: {
        position: "absolute",
        bottom: -5,
        fontSize: 14,
        backgroundColor: "red",
        borderRadius: 5,
        width: 25,
        justifyContent: "center",
        textAlign: "center",
        padding: 2
    }
});