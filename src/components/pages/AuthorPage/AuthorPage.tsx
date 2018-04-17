import classnames from "classnames";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { CommonAttributes } from "common/types";

import c from "./AuthorPage.scss";

interface RouteParams {
  authorId: string;
}

interface Props extends CommonAttributes, RouteComponentProps<RouteParams> {}

const AuthorPage = (props: Props) => (
  <main className={classnames(props.className, c.authorPage)}>Author page</main>
);

export { AuthorPage, RouteParams };
