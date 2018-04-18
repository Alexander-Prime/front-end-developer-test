import classnames from "classnames";
import { Seq } from "immutable";
import React from "react";
import { connect } from "react-redux";

import { CommonAttributes } from "common/types";

import { PostView } from "components/molecules";

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
    <ol className={c["homePage-posts"]}>
      {props.posts.map(post => (
        <PostView
          className={c["homePage-posts-post"]}
          key={post.id}
          postId={post.id}
        />
      ))}
    </ol>
  </main>
);

const mapStateToProps = (state: Blog): StateProps => ({
  posts: state.posts
    .toIndexedSeq()
    .sortBy(post => post.id)
    .reverse()
    .take(15),
});

const HomePage = connect(mapStateToProps)(PartialHomePage);

export { HomePage };
