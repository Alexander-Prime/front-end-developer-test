import { Comment } from "data/Comment";
import { TypedAction } from "data/common";

const enum ActionTypes {
  ADD = "[Comment] Add",
}

type Action = AddAction;

interface AddAction extends TypedAction<ActionTypes.ADD> {
  payload: { comments: Iterable<Comment> };
}

const add = (comments: Iterable<Comment>) => ({
  type: ActionTypes.ADD,
  payload: { comments },
});

export { ActionTypes, Action };
export { add };
