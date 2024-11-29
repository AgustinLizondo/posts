import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Post as PostType } from '../../middlewares/posts/types'
import { addFavorite, getFavorites as getFavoritesFromStorage, removeFavorite } from '../../utils/AsyncStorage'
import Post from '../../components/Post';

const Favorites = () => {
  const [favorites, setFavorites] = useState<PostType[]>([]);

  const getFavorites = async () => {
    const tempFavorites = await getFavoritesFromStorage();
    setFavorites(tempFavorites);
  }

  useEffect(() => {
    getFavorites();
  }, [])

  const renderItem = ({ item }: { item: PostType }) => {
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
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View className="w-full h-0.5 bg-gray-200" />}
        ListEmptyComponent={() => <Text className="text-center text-gray-500 p-4">No posts found</Text>}
      />
    </View>
  )
}

export default Favorites