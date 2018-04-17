import { Map, Record } from "immutable";

import { Comment } from "data/Comment";
import { EntityTable } from "data/common";
import { Post } from "data/Post";
import { User } from "data/User";

interface BlogProps {
  posts: EntityTable<Post>;
  users: EntityTable<User>;
  comments: EntityTable<Comment>;
}

class Blog extends Record<BlogProps>({
  posts: Map(),
  users: Map(),
  comments: Map(),
}) {}

export { Blog };
