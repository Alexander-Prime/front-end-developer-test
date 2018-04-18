import classnames from "classnames";
import React from "react";

import { CommonAttributes } from "common/types";

import { LatLon } from "data/User";

import c from "./GoogleMap.scss";

interface Props extends CommonAttributes {
  latLon: LatLon;
}

const GoogleMap = (props: Props) => (
  <iframe
    className={classnames(props.className, c.googleMap)}
    width="300"
    height="300"
    src={
      "https://www.google.com/maps/embed/v1/view?" +
      "key=AIzaSyCKCP_2OJh5wbsm1_PIYLPBFYCq9oFqMPc&" +
      `center=${props.latLon.lat},${props.latLon.lon}&` +
      "zoom=16"
    }
  />
);

export { GoogleMap };
