import { Map } from "immutable";

import { add } from "../actions";
import { Post } from "../model";
import { reducer } from "../reducer";

const testPosts = Map.of(
  1,
  new Post({ id: 1, body: "Lorem ipsum" }),
  2,
  new Post({ id: 2, body: "dolor sit amet" }),
);

describe("Posts reducer", () => {
  describe("add action", () => {
    it("returns a map with the new post added", () => {
      const post = new Post({ id: 3 });
      expect(reducer(testPosts, add([post]))).toEqual(
        testPosts.set(post.id, post),
      );
    });
  });
});
