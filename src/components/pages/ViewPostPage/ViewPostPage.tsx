import classnames from "classnames";
import { Seq } from "immutable";
import React from "react";
import { connect, Dispatch } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";

import { CommonAttributes } from "common/types";

import { CommentView } from "components/molecules";

import { Blog } from "data/Blog";
import { add as addComments, Comment } from "data/Comment";
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

interface DispatchProps {
  addComments: (comments: Iterable<Comment>) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class PartialViewPostPage extends React.PureComponent<Props> {
  private commentNameElem: HTMLInputElement | null = null;
  private commentEmailElem: HTMLInputElement | null = null;
  private commentBodyElem: HTMLTextAreaElement | null = null;

  render() {
    const { className, photo, post, author, comments } = this.props;
    const photoStyle = { backgroundImage: `url(${photo.url})` };
    return (
      <main className={classnames(className, c.viewPostPage)}>
        <header className={c["viewPostPage-header"]}>
          <h1 className={c["viewPostPage-header-title"]}>{post.title}</h1>
          <Link
            className={c["viewPostPage-header-author"]}
            to={`/u/${author.id}`}
          >
            {author.name}
          </Link>
          <div
            className={c["viewPostPage-header-photo"]}
            style={photoStyle}
            title={photo.title}
          />
        </header>
        <section className={c["viewPostPage-body"]}>{post.body}</section>
        <section className={c["viewPostPage-comments"]}>
          <header className={c["viewPostPage-comments-header"]}>
            {Seq(comments).count()} comments
          </header>
          {Seq.Indexed(comments).map(comment => (
            <CommentView
              key={comment.id}
              className={c["viewPostPage-comments-comment"]}
              commentId={comment.id}
            />
          ))}
          <form className={c["viewPostPage-comments-form"]}>
            <label
              htmlFor="comment-name"
              className={c["viewPostPage-comments-form-label"]}
            >
              Name
            </label>
            <input
              id="comment-name"
              className={c["viewPostPage-comments-form-name"]}
              ref={elem => (this.commentNameElem = elem)}
            />
            <label
              htmlFor="comment-email"
              className={c["viewPostPage-comments-form-label"]}
            >
              Email
            </label>
            <input
              id="comment-email"
              className={c["viewPostPage-comments-form-email"]}
              ref={elem => (this.commentEmailElem = elem)}
            />
            <label
              htmlFor="comment-body"
              className={c["viewPostPage-comments-form-label"]}
            >
              Comment
            </label>
            <textarea
              id="comment-body"
              className={c["viewPostPage-comments-form-body"]}
              ref={elem => (this.commentBodyElem = elem)}
            />
            <button
              className={c["viewPostPage-comments-form-submit"]}
              type="button"
              onClick={this.onSubmitComment}
            >
              Post comment
            </button>
          </form>
        </section>
      </main>
    );
  }

  private onSubmitComment = () => {
    this.props.addComments([
      new Comment({
        postId: this.props.post.id,
        id: Date.now(),
        name: this.commentNameElem ? this.commentNameElem.value : "",
        email: this.commentEmailElem ? this.commentEmailElem.value : "",
        body: this.commentBodyElem ? this.commentBodyElem.value : "",
      }),
    ]);
    if (this.commentBodyElem) {
      this.commentBodyElem.value = "";
    }
  };
}

const mapStateToProps = (state: Blog, props: OwnProps): StateProps => {
  const post = state.posts.get(+props.match.params.postId, new Post());
  return {
    photo: state.photos.get(post.id, new Photo()),
    post,
    author: state.users.get(post.userId, new User()),
    comments: state.comments
      .toIndexedSeq()
      .filter(comment => comment.postId === post.id)
      .sortBy(comment => comment.id),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Blog>): DispatchProps => ({
  addComments: comments => dispatch(addComments(comments)),
});

const ViewPostPage = connect(mapStateToProps, mapDispatchToProps)(
  PartialViewPostPage,
);

export { ViewPostPage };
