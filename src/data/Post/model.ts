import { Record } from "immutable";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class Post extends Record<PostProps>({
  userId: 0,
  id: 0,
  title: "⋯",
  body: "⋯",
}) {}

export { Post };
