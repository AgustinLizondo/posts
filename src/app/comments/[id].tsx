import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import PostsMiddlewares from '../../middlewares/posts/posts';
import { Comment as CommentType } from '../../middlewares/posts/types';
import { useRouteInfo } from 'expo-router/build/hooks';
import Comment from '../../components/Comment';
import UsersMiddlewares from '../../middlewares/users/users';
import { User } from '../../middlewares/users/types';

const Comments = () => {
  const { id } = useLocalSearchParams();
  const routeInfo = useRouteInfo();
  console.log(routeInfo)
  routeInfo.pathname = "comments";
  const [comments, setComments] = useState<CommentType[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const getComments = async () => {
    await PostsMiddlewares.getCommentsByPostId({
      postId: parseInt(id.toString()),
      successCallback: (response) => {
        setComments(response.data);
      }
    })
  }

  const getUsers = async () => {
    await UsersMiddlewares.getUsers({
      successCallback: (response) => {
        setUsers(response.data);
      },
    })
  }

  useEffect(() => {
    getComments();
    getUsers();
  }, [])

  const renderItem = ({ item }: { item: CommentType }) => {
    return (
      <Comment
        avatar="https://i.pravatar.cc/64"
        comment={item.body}
        firstname={users[item.id - 1]?.firstname}
        lastname={users[item.id - 1]?.lastname}
        email={users[item.id - 1]?.email}
        phone={users[item.id - 1]?.phone}
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

export default Comments;
