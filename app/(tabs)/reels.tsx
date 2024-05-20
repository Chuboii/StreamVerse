import React, { useRef } from 'react';
import { View, ScrollView, Animated, Dimensions } from 'react-native';
import ReelVideoTemplate from "@/components/reels video/ReelsVideo"

const { height: screenHeight } = Dimensions.get('window');

const Reels = () => {
  const scrollViewRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  const scrollToVideo = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: index * screenHeight, animated: true });
    }
  };
  

  return (
    <View style={{ flex: 1, backgroundColor:"blue" }}>
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
     {/* <ReelVideoTemplate videoStyle={{ height: screenHeight + 100, width: "100%",
      backgroundColor:"red", flex:1 }} />
      <ReelVideoTemplate videoStyle={{ height: screenHeight + 100, width: "100%",
      backgroundColor:"red", flex:1 }} />
      <ReelVideoTemplate videoStyle={{ height: screenHeight + 100, width: 200,
      backgroundColor:"red", flex:1 }} />*/}
      </ScrollView>
    </View>
  );
};

export default Reels
