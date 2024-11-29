import { 
  getPosts as getPostsService,
  getPostById as getPostByIdService,
  getCommentsByPostId as getCommentsByPostIdService,
} from "../../services/posts";
import { IGetCommentByPostId, IGetPostById, IGetPosts } from "./types";

const getPosts = async (params: IGetPosts = {}) => {
  const {
    successCallback = () => null,
    errorCallback = () => null,
    finallyCallback = () => null,
  } = params;

  try {
    const response = await getPostsService();
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
};

const getPostById = async (params: IGetPostById) => {
  const {
    postId,
    successCallback = () => null,
    errorCallback = () => null,
    finallyCallback = () => null,
  } = params;

  try {
    const response = await getPostByIdService(postId);
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
}

const getCommentsByPostId = async (params: IGetCommentByPostId) => {
  const {
    postId,
    successCallback = () => null,
    errorCallback = () => null,
    finallyCallback = () => null,
  } = params;

  try {
    const response = await getCommentsByPostIdService(postId);
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
}

const PostsMiddlewares = {
  getPosts,
  getPostById,
  getCommentsByPostId,
};

export default PostsMiddlewares;
