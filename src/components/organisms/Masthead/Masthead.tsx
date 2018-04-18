import classnames from "classnames";
import React from "react";
import { Icon } from "react-atoms";
import { Link } from "react-router-dom";

import { CommonAttributes } from "common/types";

import c from "./Masthead.scss";

interface Props extends CommonAttributes {}

const Masthead = (props: Props) => (
  <header className={classnames(props.className, c.masthead)}>
    <nav className={c["masthead-nav"]}>
      <Link className={c["masthead-nav-title"]} to="/">
        A Big Ol' Blog
      </Link>
      <Link className={c["masthead-nav-createPost"]} to="/create">
        <Icon name="create" /> Create post
      </Link>
    </nav>
  </header>
);

export { Masthead };
