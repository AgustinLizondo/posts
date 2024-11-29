import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Image, Pressable, ScrollView, Share, Text, View } from 'react-native';
import PostsMiddlewares from '../../middlewares/posts/posts';
import { Post } from '../../middlewares/posts/types';
import { useRouteInfo } from 'expo-router/build/hooks';
import Ionicons from '@expo/vector-icons/Ionicons';
import { API_URL } from '../../services';

const PostDetail = () => {
  const { id } = useLocalSearchParams();
  const routeInfo = useRouteInfo();
  routeInfo.pathname = "post detail";
  const { width } = Dimensions.get('window');

  const [post, setPost] = useState<Post>({} as Post);

  const getPostById = async () => {
    await PostsMiddlewares.getPostById({
      postId: parseInt(id.toString()),
      successCallback: (response) => {
        setPost(response.data);
      }
    })
  }

  useEffect(() => {
    getPostById();
  }, [])

  const onShare = async () => {
    try {
      await Share.share({
        message: `Share you favorites posts: ${API_URL}posts/${id}`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const onCommentsPress = () => router.navigate(`/comments/${id}`)

  return (
    <View className="flex flex-1">
      {post.image && (
        <Image
          source={{
            uri: post.image,
          }}
          className="bg-gray-100 bg-contain"
          width={width}
          height={width / 1.7} // 16:9
        />
      )}
      <Pressable
        className="absolute p-4 rounded-full bg-gray-50 right-4 top-4"
        onPress={onShare}
      >
        <Ionicons name="share-outline" size={24} />
      </Pressable>
      <View className="flex flex-row justify-between m-4 items-center">
        <Text className="text-gray-500">
          {post.publishedAt}
        </Text>
        <Text className="bg-gray-200 rounded-full p-4">
          {post.category}
        </Text>
      </View>
      <ScrollView className='flex flex-1'>
        <Text className='text-lg mt-0 m-4'>
          {post.content}
        </Text>
        <Pressable
          className="flex flex-row justify-between items-center rounded-full m-2 p-4 bg-gray-50 border border-gray-300"
          onPress={onCommentsPress}
        >
          <Text className="font-bold">
            People's opinions
          </Text>
          <Ionicons name="chevron-forward" size={20} />
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default PostDetail