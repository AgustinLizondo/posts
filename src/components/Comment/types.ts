import { ViewProps } from "react-native";

export interface CommentProps extends ViewProps {
  avatar: string;
  comment: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}
