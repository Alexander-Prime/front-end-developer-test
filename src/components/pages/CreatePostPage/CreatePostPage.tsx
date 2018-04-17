import classnames from "classnames";
import React from "react";

import { CommonAttributes } from "common/types";

import c from "./CreatePostPage.scss";

interface Props extends CommonAttributes {}

const CreatePostPage = (props: Props) => (
  <main className={classnames(props.className, c.createPostPage)}>
    Create post page
  </main>
);

export { CreatePostPage };
