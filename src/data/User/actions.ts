import { TypedAction } from "data/common";
import { User } from "data/User";

const enum ActionTypes {
  ADD = "[User] Add",
}

type Action = AddAction;

interface AddAction extends TypedAction<ActionTypes.ADD> {
  payload: { users: Iterable<User> };
}

const add = (users: Iterable<User>) => ({
  type: ActionTypes.ADD,
  payload: { users },
});

export { ActionTypes, Action };
export { add };
