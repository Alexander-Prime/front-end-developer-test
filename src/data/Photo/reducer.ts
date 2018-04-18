import { Map, Seq } from "immutable";

import { EntityTable } from "data/common";

import { Action, ActionTypes } from "./actions";
import { Photo } from "./model";

const reducer = (state: EntityTable<Photo> = Map(), action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      const { photos } = action.payload;
      return state.merge(
        Seq(photos)
          .toKeyedSeq()
          .mapKeys((_, photo) => photo.id),
      );
    }
    default:
      return state;
  }
};

export { reducer };
