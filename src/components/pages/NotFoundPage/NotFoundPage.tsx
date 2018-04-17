import classnames from "classnames";
import React from "react";

import { CommonAttributes } from "common/types";

import c from "./NotFoundPage.scss";

interface Props extends CommonAttributes {}

const NotFoundPage = (props: Props) => (
  <main className={classnames(props.className, c.notFoundPage)}>Not found</main>
);

export { NotFoundPage };
