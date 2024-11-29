import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import PostsMiddlewares from '../../middlewares/posts/posts';
import { Comment as CommentType } from '../../middlewares/posts/types';
import { useRouteInfo } from 'expo-router/build/hooks';
import Comment from '../../components/Comment';

const Comments = () => {
  const { id } = useLocalSearchParams();
  const routeInfo = useRouteInfo();
  routeInfo.pathname = "comments";
  const [comments, setComments] = useState<CommentType[]>([]);

  const getComments = async () => {
    await PostsMiddlewares.getCommentsByPostId({
      postId: parseInt(id.toString()),
      successCallback: (response) => {
        setComments(response.data);
      }
    })
  }

  useEffect(() => {
    getComments();
  }, [])

  const renderItem = ({ item }: { item: CommentType }) => {
    return (
      <Comment
        avatar="https://i.pravatar.cc/64"
        name={item.name}
        comment={item.body}
      />
    )
  }

  return (
    <View className="flex flex-1">
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className="w-full h-0.5 bg-gray-200" />}
        ListEmptyComponent={() => <Text className="text-center text-gray-500 p-4">No comments were found for this post.</Text>}
      />
    </View>
  )
}

export default Comments