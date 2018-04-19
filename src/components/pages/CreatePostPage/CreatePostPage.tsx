import classnames from "classnames";
import { History } from "history";
import React from "react";
import { connect, Dispatch } from "react-redux";
import { withRouter } from "react-router";

import { CommonAttributes } from "common/types";
import { sleep } from "common/utils";

import { Blog, setNotification } from "data/Blog";
import { add as addPosts, Post, postPost } from "data/Post";

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
    postPost(
      1,
      this.titleElem ? this.titleElem.value : "",
      this.bodyElem ? this.bodyElem.value : "",
    )
      .then(post => this.props.addPosts([post]))
      .then(() => {
        history.replace("/");
        this.props.setNotification("Post successful");
        return sleep(3000);
      })
      .then(() => this.props.setNotification(""))
      .catch(console.error);
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
