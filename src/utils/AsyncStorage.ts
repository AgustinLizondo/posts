import AsyncStorage from '@react-native-async-storage/async-storage';
import { Post } from '../middlewares/posts/types';

const FAVORITES_KEY = 'favorites';

export const addFavorite = async (post: Post, successCallback?: (posts: Post[]) => void): Promise<void> => {
  try {
    const favorites = await getFavorites();
    if (!favorites.some((fav) => fav.id === post.id)) {
      favorites.push(post)
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      successCallback && successCallback(favorites);
    }
  } catch (e) {
    console.error('Error adding to favorites:', e);
  }
};

export const removeFavorite = async (postId: number, successCallback?: (posts: Post[]) => void): Promise<void> => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = favorites.filter((fav) => fav.id !== postId);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    successCallback && successCallback(updatedFavorites);
  } catch (e) {
    console.error('Error removing from favorite:', e);
  }
};

export const getFavorites = async (): Promise<Post[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY)
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error getting favorites:', e);
    return []
  }
};
