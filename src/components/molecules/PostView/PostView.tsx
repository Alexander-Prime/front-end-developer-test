import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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

const PartialPostView = (props: Props) => {
  const { photo, post, user } = props;
  const title =
    post.title.length > 15 ? post.title.slice(0, 14) + "…" : post.title;
  const body =
    post.body.length > 15 ? post.title.slice(0, 29) + "…" : post.body;
  return (
    <li className={classnames(props.className, c.postView)}>
      <Link className={c["postView-content"]} to={`/${post.id}`}>
        <div
          className={c["postView-content-thumbnail"]}
          style={{ backgroundImage: `url("${photo.thumbnailUrl}")` }}
        />
        <div className={c["postView-content-title"]}>{title}</div>
        <div className={c["postView-content-author"]}>{user.name}</div>
        <div className={c["postView-content-body"]}>{body}</div>
      </Link>
    </li>
  );
};

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
