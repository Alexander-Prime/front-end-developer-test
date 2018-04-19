import { Map, Record } from "immutable";

import { Comment } from "data/Comment";
import { EntityTable } from "data/common";
import { Photo } from "data/Photo";
import { Post } from "data/Post";
import { User } from "data/User";

interface BlogProps {
  comments: EntityTable<Comment>;
  photos: EntityTable<Photo>;
  posts: EntityTable<Post>;
  users: EntityTable<User>;
  notification: string;
}

class Blog extends Record<BlogProps>({
  comments: Map(),
  photos: Map(),
  posts: Map(),
  users: Map(),
  notification: "",
}) {}

export { Blog };
