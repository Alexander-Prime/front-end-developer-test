import classnames from "classnames";
import { History } from "history";
import React from "react";
import { connect, Dispatch } from "react-redux";
import { withRouter } from "react-router";

import { CommonAttributes } from "common/types";

import { Blog, setNotification } from "data/Blog";
import { add as addPosts, Post } from "data/Post";

import c from "./CreatePostPage.scss";

interface OwnProps extends CommonAttributes {}

interface DispatchProps {
  addPosts: (posts: Iterable<Post>) => void;
  setNotification: (notification: string) => void;
}

type Props = OwnProps & DispatchProps;

class PartialCreatePostPage extends React.PureComponent<Props> {
  private titleElem: HTMLInputElement | null = null;
  private bodyElem: HTMLTextAreaElement | null = null;

  private renderButton = withRouter(({ history }) => (
    <button
      type="button"
      className={c["createPostPage-form-submit"]}
      onClick={this.onSubmit(history)}
    >
      Post
    </button>
  ));

  render() {
    const { className } = this.props;
    return (
      <main className={classnames(className, c.createPostPage)}>
        <form className={c["createPostPage-form"]}>
          <header className={c["createPostPage-form-header"]}>
            Create a post
          </header>
          <input
            className={c["createPostPage-form-title"]}
            ref={elem => (this.titleElem = elem)}
          />
          <textarea
            className={c["createPostPage-form-body"]}
            ref={elem => (this.bodyElem = elem)}
          />
          <this.renderButton />
        </form>
      </main>
    );
  }

  onSubmit = (history: History) => () => {
    this.props.addPosts([
      new Post({
        userId: 1,
        id: Date.now(),
        title: this.titleElem ? this.titleElem.value : "",
        body: this.bodyElem ? this.bodyElem.value : "",
      }),
    ]);
    history.replace("/");
    this.props.setNotification("Post successful");
    setTimeout(() => this.props.setNotification(""), 3000);
  };
}

const mapDispatchToProps = (dispatch: Dispatch<Blog>): DispatchProps => ({
  addPosts: (posts: Iterable<Post>) => dispatch(addPosts(posts)),
  setNotification: (notification: string) =>
    dispatch(setNotification(notification)),
});

const CreatePostPage = connect(undefined, mapDispatchToProps)(
  PartialCreatePostPage,
);

export { CreatePostPage };
