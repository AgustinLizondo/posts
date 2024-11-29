import { ICallbacksApi } from "../types";

export type Post = {
  category: string;
  content: string;
  id: number;
  image: string;
  publishedAt: string;
  slug: string;
  status: string;
  thumbnail: string;
  title: string;
  updatedAt: string;
  url: string;
  userId: number;
}

export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
} 

export interface IGetPosts extends ICallbacksApi {}

export interface IGetPostById extends ICallbacksApi {
  postId: number;
}

export interface IGetCommentByPostId extends ICallbacksApi {
  postId: number;
}
