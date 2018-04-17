import { Record } from "immutable";

interface CommentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

class Comment extends Record<CommentProps>({
  postId: 0,
  id: 0,
  name: "⋯",
  email: "⋯",
  body: "⋯",
}) {}

export { Comment };
