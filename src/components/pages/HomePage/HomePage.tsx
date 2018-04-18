import classnames from "classnames";
import { Seq } from "immutable";
import React from "react";
import { connect } from "react-redux";

import { CommonAttributes } from "common/types";

import { Blog } from "data/Blog";
import { Post } from "data/Post";

import c from "./HomePage.scss";

interface OwnProps extends CommonAttributes {}

interface StateProps {
  posts: Seq.Indexed<Post>;
}

type Props = OwnProps & StateProps;

const PartialHomePage = (props: Props) => (
  <main className={classnames(props.className, c.homePage)}>
    {props.posts.map(post => (
      <div key={post.id} className={c["homePage-post"]}>
        {post.title}
      </div>
    ))}
  </main>
);

const mapStateToProps = (state: Blog): StateProps => ({
  posts: state.posts.toIndexedSeq(),
});

const HomePage = connect(mapStateToProps)(PartialHomePage);

export { HomePage };
