import { Api, TypiApi } from ".";

export const getPosts = () => Api.get('/posts');

export const getPostById = (id: number) => Api.get(`/posts/${id}`);

export const getCommentsByPostId = (postId: number) => TypiApi.get(`/posts/${postId}/comments`);
