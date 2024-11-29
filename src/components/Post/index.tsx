import React from 'react'
import { PostProps } from './types'
import { Pressable, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const Post = (props: PostProps) => {
  const {
    item, 
    isFavorite,
    onFavoritePress,
    onPress,
    ...rest
  } = props;

  const onItemPress = (e: any) => {
    onPress && onPress(e);
    router.navigate(`/post/${item.id}`);
  }

  return (
  <Pressable
    className="flex flex-row items-center justify-between p-4"
    onPress={onItemPress}
    {...rest}
  >
    <View className="flex flex-col w-[75%]">
      <Text className="text-lg font-bold text-black overflow-hidden text-ellipsis line-clamp-1">
        {item.title}
      </Text>
      <Text className="text-sm text-black">
        {item.publishedAt}
      </Text>
    </View>
    {onFavoritePress && (<Pressable className="p-2" onPress={onFavoritePress}>
      <Ionicons className="p-2" name={isFavorite ? "bookmark" : "bookmark-outline"} size={24} />
    </Pressable>)}
  </Pressable>
  )
}

export default Post