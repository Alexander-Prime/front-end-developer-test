import classnames from "classnames";
import React from "react";

import { CommonAttributes } from "common/types";

import c from "./Toast.scss";

interface Props extends CommonAttributes {
  text: string;
}

const Toast = (props: Props) => (
  <div
    className={classnames(props.className, c.toast, {
      [c["is-visible"]]: props.text !== "",
    })}
  >
    {props.text}
  </div>
);

export { Toast };
