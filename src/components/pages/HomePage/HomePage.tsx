import classnames from "classnames";
import React from "react";

import { CommonAttributes } from "common/types";

import c from "./HomePage.scss";

interface Props extends CommonAttributes {}

const HomePage = (props: Props) => (
  <main className={classnames(props.className, c.homePage)}>Home page</main>
);

export { HomePage };
