import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";

import { CommonAttributes } from "common/types";

import { Blog } from "data/Blog";
import { Photo } from "data/Photo";
import { Post } from "data/Post";
import { User } from "data/User";

import c from "./PostView.scss";

interface OwnProps extends CommonAttributes {
  postId: number;
}

interface StateProps {
  post: Post;
  user: User;
  photo: Photo;
}

type Props = OwnProps & StateProps;

const PartialPostView = (props: Props) => (
  <li className={classnames(props.className, c.postView)}>
    <img className={c["postView-thumbnail"]} src={props.photo.thumbnailUrl} />
    <div className={c["postView-title"]}>{props.post.title}</div>
    <div className={c["postView-author"]}>{props.user.name}</div>
    <div className={c["postView-body"]}>{props.post.body}</div>
  </li>
);

const mapStateToProps = (state: Blog, props: OwnProps): StateProps => {
  const post = state.posts.get(props.postId, new Post());
  return {
    post,
    user: state.users.get(post.userId, new User()),
    photo: state.photos.get(props.postId, new Photo()),
  };
};

const PostView = connect(mapStateToProps)(PartialPostView);

export { PostView };
