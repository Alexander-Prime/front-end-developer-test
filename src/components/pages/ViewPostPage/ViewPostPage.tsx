import classnames from "classnames";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { CommonAttributes } from "common/types";

import c from "./ViewPostPage.scss";

interface RouteParams {
  postId: string;
}

interface Props extends CommonAttributes, RouteComponentProps<RouteParams> {}

const ViewPostPage = (props: Props) => (
  <main className={classnames(props.className, c.viewPostPage)}>
    View post page
  </main>
);

export { ViewPostPage };
