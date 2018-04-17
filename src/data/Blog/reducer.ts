import Redux from "redux";

import { Blog } from "./model";

const reducer = (state: Blog = new Blog(), action: Redux.AnyAction): Blog => {
  switch (action.type) {
    default:
      return state;
  }
};

export { reducer };
