import { PressableProps } from "react-native";
import { Post } from "../../middlewares/posts/types";

export interface PostProps extends PressableProps {
  item: Post;
  isFavorite?: boolean;
  onFavoritePress?: () => void;
}
