import React from 'react'
import { PostProps } from './types'
import { Image, Pressable, Text, View } from 'react-native'
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
    testID="post"
    {...rest}
  >
    <View className="flex flex-col gap-4 w-[75%]">
      <Text className="text-xl font-bold text-black overflow-hidden text-ellipsis line-clamp-1">
        {item.title}
      </Text>
      <View>
        <View className="flex flex-row gap-2">
          <Image
            source={{
              uri: item.image,
            }}
            width={64}
            height={64}
            borderRadius={16}
            testID="image"
          />
          <Text className="flex flex-1 text-ellipsis line-clamp-4">
            {item.content}
          </Text>
        </View>
      </View>
      <Text className="text-sm text-gray-400">
        {item.publishedAt}
      </Text>
    </View>
    {onFavoritePress && (<Pressable className="p-2" onPress={onFavoritePress} testID="favorite-button">
      <Ionicons className="p-2" name={isFavorite ? "bookmark" : "bookmark-outline"} size={24} testID={isFavorite ? "bookmark-icon" : "bookmark-outline-icon"} />
    </Pressable>)}
  </Pressable>
  )
}

export default Post