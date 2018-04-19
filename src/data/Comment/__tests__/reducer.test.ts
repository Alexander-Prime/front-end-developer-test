import { Map } from "immutable";

import { add } from "../actions";
import { Comment } from "../model";
import { reducer } from "../reducer";

const testComments = Map.of(
  1,
  new Comment({
    postId: 1,
    id: 1,
    name: "One",
    email: "1@one.won",
    body: "I won",
  }),
  2,
  new Comment({
    postId: 1,
    id: 2,
    name: "Two",
    email: "2@two.too",
    body: "Me too",
  }),
);

describe("Comments reducer", () => {
  describe("add action", () => {
    it("returns a map with the new comment added", () => {
      const commentThree = new Comment({
        postId: 1,
        id: 3,
        name: "Three",
        email: "3@three.III",
        body: "sqrt(sqrt(81))",
      });
      expect(reducer(testComments, add([commentThree]))).toEqual(
        testComments.set(commentThree.id, commentThree),
      );
    });
  });
});
