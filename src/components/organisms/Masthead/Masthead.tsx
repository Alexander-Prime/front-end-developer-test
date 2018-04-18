import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import { CommonAttributes } from "common/types";

import c from "./Masthead.scss";

interface Props extends CommonAttributes {}

const Masthead = (props: Props) => (
  <header className={classnames(props.className, c.masthead)}>
    <Link className={c["masthead-title"]} to="/">
      A Big Ol' Blog
    </Link>
  </header>
);

export { Masthead };
