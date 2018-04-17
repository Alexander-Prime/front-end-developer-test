import { Map, Seq } from "immutable";

import { EntityTable } from "data/common";

import { Action, ActionTypes } from "./actions";
import { Post } from "./model";

const reducer = (state: EntityTable<Post> = Map(), action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      const { posts } = action.payload;
      return state.merge(
        Seq(posts)
          .toKeyedSeq()
          .mapKeys((_, post) => post.id),
      );
    }
    default:
      return state;
  }
};

export { reducer };
