import { Map, Seq } from "immutable";

import { EntityTable } from "data/common";

import { Action, ActionTypes } from "./actions";
import { Comment } from "./model";

const reducer = (state: EntityTable<Comment> = Map(), action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      const { comments } = action.payload;
      return state.merge(
        Seq(comments)
          .toKeyedSeq()
          .mapKeys((_, comment) => comment.id),
      );
    }
    default:
      return state;
  }
};

export { reducer };
