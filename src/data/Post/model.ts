import { Record } from "immutable";

import { Entity } from "data/common";

interface PostProps extends Entity {
  userId: number;
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
