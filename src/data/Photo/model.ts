import { Record } from "immutable";

import { Entity } from "data/common";

interface PostProps extends Entity {
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

class Photo extends Record<PostProps>({
  albumId: 0,
  id: 0,
  title: "⋯",
  url: "http://placehold.it/600",
  thumbnailUrl: "http://placehold.it/150",
}) {}

export { Photo };
