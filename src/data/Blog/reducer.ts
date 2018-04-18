import { combineReducers } from "redux-immutable";

import { reducer as comments } from "data/Comment";
import { reducer as photos } from "data/Photo";
import { reducer as posts } from "data/Post";
import { reducer as users } from "data/User";

import { Blog } from "./model";

const reducer = combineReducers<Blog>({
  comments,
  photos,
  posts,
  users,
});

export { reducer };
