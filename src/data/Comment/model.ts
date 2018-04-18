import { Record } from "immutable";

import { Entity } from "data/common";

interface CommentProps extends Entity {
  postId: number;
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
