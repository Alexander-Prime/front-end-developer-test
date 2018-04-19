import { Map } from "immutable";

import { Comment } from "data/Comment";
import { Photo } from "data/Photo";
import { Post } from "data/Post";
import { User } from "data/User";

import { setNotification } from "../actions";
import { Blog } from "../model";
import { reducer } from "../reducer";

const testBlog = new Blog({
  comments: Map.of(1, new Comment({ id: 1 }), 2, new Comment({ id: 2 })),
  photos: Map.of(1, new Photo({ id: 1 }), 2, new Photo({ id: 2 })),
  posts: Map.of(1, new Post({ id: 1 }), 2, new Post({ id: 2 })),
  users: Map.of(1, new User({ id: 1 }), 2, new User({ id: 2 })),
  notification: "Before",
});

describe("Blog reducer", () => {
  describe("setNotification action", () => {
    it("returns the same Blog with the notification set", () => {
      expect(reducer(testBlog, setNotification("After"))).toEqual(
        testBlog.set("notification", "After"),
      );
    });
  });
});
