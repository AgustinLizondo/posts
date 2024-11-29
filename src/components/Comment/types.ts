import { ViewProps } from "react-native";

export interface CommentProps extends ViewProps {
  avatar: string;
  name: string;
  comment: string;
}
