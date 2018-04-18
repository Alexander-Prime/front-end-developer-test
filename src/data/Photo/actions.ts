import { TypedAction } from "data/common";

import { Photo } from "./model";

const enum ActionTypes {
  ADD = "[Photo] Add",
}

type Action = AddAction;

interface AddAction extends TypedAction<ActionTypes.ADD> {
  payload: { photos: Iterable<Photo> };
}

const add = (photos: Iterable<Photo>) => ({
  type: ActionTypes.ADD,
  payload: { photos },
});

export { ActionTypes, Action };
export { add };
