import classnames from "classnames";
import React from "react";

import { CommonAttributes } from "common/types";

import c from "./Masthead.scss";

interface Props extends CommonAttributes {}

const Masthead = (props: Props) => (
  <header className={classnames(props.className, c.masthead)}>
    <div className={c["masthead-title"]}>A Big Ol' Blog</div>
  </header>
);

export { Masthead };
