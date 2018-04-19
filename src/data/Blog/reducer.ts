import { combineReducers } from "redux-immutable";

import { reducer as comments } from "data/Comment";
import { reducer as photos } from "data/Photo";
import { reducer as posts } from "data/Post";
import { reducer as users } from "data/User";

import { Action, ActionTypes } from "./actions";
import { Blog } from "./model";

const reducer = combineReducers<Blog>({
  comments,
  photos,
  posts,
  users,
  notification: (state: string = "", action: Action) => {
    switch (action.type) {
      case ActionTypes.SET_NOTIFICATION: {
        return action.payload.notification;
      }
      default:
        return state;
    }
  },
});

export { reducer };
