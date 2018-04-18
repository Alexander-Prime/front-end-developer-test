import classnames from "classnames";
import { Seq } from "immutable";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { CommonAttributes } from "common/types";

import { Blog } from "data/Blog";
import { Comment } from "data/Comment";
import { Photo } from "data/Photo";
import { Post } from "data/Post";
import { User } from "data/User";

import c from "./ViewPostPage.scss";

interface RouteParams {
  postId: string;
}

interface OwnProps extends CommonAttributes, RouteComponentProps<RouteParams> {}

interface StateProps {
  photo: Photo;
  post: Post;
  author: User;
  comments: Iterable<Comment>;
}

type Props = OwnProps & StateProps;

const PartialViewPostPage = (props: Props) => {
  const { photo, post, author, comments } = props;
  const photoStyle = { backgroundImage: `url(${photo.url})` };
  return (
    <main className={classnames(props.className, c.viewPostPage)}>
      <header className={c["viewPostPage-header"]}>
        <h1 className={c["viewPostPage-header-title"]}>{post.title}</h1>
        <h2 className={c["viewPostPage-header-author"]}>{author.name}</h2>
        <div
          className={c["viewPostPage-header-photo"]}
          style={photoStyle}
          title={photo.title}
        />
      </header>
      <section className={c["viewPostPage-body"]}>{post.body}</section>
      <section className={c["viewPostPage-comments"]}>
        {Seq.Indexed(comments).map(comment => (
          <div key={comment.id} className={c["viewPostPage-comments-comment"]}>
            {comment.body}
          </div>
        ))}
      </section>
    </main>
  );
};

const mapStateToProps = (state: Blog, props: OwnProps): StateProps => {
  const post = state.posts.get(+props.match.params.postId, new Post());
  return {
    photo: state.photos.get(post.id, new Photo()),
    post,
    author: state.users.get(post.userId, new User()),
    comments: state.comments
      .toIndexedSeq()
      .filter(comment => comment.postId === post.id),
  };
};

const ViewPostPage = connect(mapStateToProps)(PartialViewPostPage);

export { ViewPostPage };
