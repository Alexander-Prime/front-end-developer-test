import { Map, Seq } from "immutable";

import { EntityTable } from "data/common";

import { Action, ActionTypes } from "./actions";
import { User } from "./model";

const reducer = (state: EntityTable<User> = Map(), action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      const { users } = action.payload;
      return state.merge(
        Seq(users)
          .toKeyedSeq()
          .mapKeys((_, user) => user.id),
      );
    }
    default:
      return state;
  }
};

export { reducer };
