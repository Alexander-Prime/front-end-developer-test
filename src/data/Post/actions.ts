import { TypedAction } from "data/common";
import { Post } from "data/Post";

const enum ActionTypes {
  ADD = "[Post] Add",
}

type Action = AddAction;

interface AddAction extends TypedAction<ActionTypes.ADD> {
  payload: { posts: Iterable<Post> };
}

const add = (posts: Iterable<Post>) => ({
  type: ActionTypes.ADD,
  payload: { posts },
});

export { ActionTypes, Action };
export { add };
