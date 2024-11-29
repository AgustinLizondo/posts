import React, { useEffect, useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import { Post as PostType } from '../middlewares/posts/types';
import PostsMiddlewares from '../middlewares/posts/posts';
import { addFavorite, getFavorites, removeFavorite } from '../utils/AsyncStorage';
import Post from '../components/Post';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>(posts);
  const [favorites, setFavorites] = useState<PostType[]>([]);

  const getPosts = async () => {
    await PostsMiddlewares.getPosts({
      successCallback: (response) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      }
    })
  }

  const getFavoritesPosts = async () => {
    const tempFavorites = await getFavorites();
    setFavorites(tempFavorites);
  }

  useEffect(() => {
    getPosts();
    getFavoritesPosts();
  }, [])

  useEffect(() => {
    setFilteredPosts(
      posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()) || post.content.toLowerCase().includes(searchValue.toLowerCase()))
    )
  }, [searchValue])

  const renderItem = ({ item }: { item: PostType}) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    const handleFavoritePress = async () => {
      const successCallback = (updatedFavorites: PostType[]) => setFavorites(updatedFavorites);

      if (isFavorite) {
        await removeFavorite(
          item.id,
          successCallback,
        )
      } else {
        await addFavorite(
          item,
          successCallback,
        )
      }
    }

    return (
      <Post
        item={item}
        isFavorite={isFavorite}
        onFavoritePress={handleFavoritePress}
      />
    )
  }

  return (
    <View className="flex flex-1">
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Search posts..."
        className="bg-gray-100 rounded-full p-4 mx-4 border border-gray-300"
      />
      <FlatList
        data={filteredPosts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View className="w-full h-0.5 bg-gray-200" />}
        ListEmptyComponent={() => <Text className="text-center text-gray-500 p-4">No posts found</Text>}
      />
    </View>
  )
}

export default Home;
