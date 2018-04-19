import { Map } from "immutable";

import { add } from "../actions";
import { Photo } from "../model";
import { reducer } from "../reducer";

const testPhotos = Map.of(1, new Photo({ id: 1 }), 2, new Photo({ id: 2 }));

describe("Photos reducer", () => {
  describe("add action", () => {
    it("returns a map with the new photo added", () => {
      const photo = new Photo({ id: 3 });
      expect(reducer(testPhotos, add([photo]))).toEqual(
        testPhotos.set(photo.id, photo),
      );
    });
  });
});
