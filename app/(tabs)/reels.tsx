import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import ReelsVideo from '@/components/reels video/ReelsVideo'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import CommentTemplate from '@/components/reels comment/ReelsComment'
import { useAppSelector } from '@/hooks/use selector/useSelector'

const reels = () => {
  const { height } = useWindowDimensions()
  const toggleReelsComment = useAppSelector(state => state.toggle.toggleReelsComment)

  useEffect(() => {

  }, [])

  return (
    <View>
      {toggleReelsComment && < CommentTemplate />}
      <ReelsVideo />
    </View>
  )
}

export default reels

const styles = StyleSheet.create({})