import { Map } from "immutable";

import { add } from "../actions";
import { User } from "../model";
import { reducer } from "../reducer";

const testUsers = Map.of(
  1,
  new User({ id: 1, name: "John Doe" }),
  2,
  new User({ id: 2, name: "Jim Doen't" }),
);

describe("Users reducer", () => {
  describe("add action", () => {
    it("returns a map with the new user added", () => {
      const user = new User({ id: 3, name: "Persephone" });
      expect(reducer(testUsers, add([user]))).toEqual(
        testUsers.set(user.id, user),
      );
    });
  });
});
