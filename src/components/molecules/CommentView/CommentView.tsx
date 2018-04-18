import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";

import { CommonAttributes } from "common/types";

import { Blog } from "data/Blog";
import { Comment } from "data/Comment";

import c from "./CommentView.scss";

interface OwnProps extends CommonAttributes {
  commentId: number;
}

interface StateProps {
  comment: Comment;
}

type Props = OwnProps & StateProps;

const PartialCommentView = (props: Props) => {
  const { comment } = props;
  return (
    <div className={classnames(props.className, c.commentView)}>
      <a className={c["commentView-name"]} href={`mailto:${comment.email}`}>
        {comment.name}
      </a>
      <div className={c["commentView-body"]}>{comment.body}</div>
    </div>
  );
};

const mapStateToProps = (state: Blog, props: OwnProps): StateProps => ({
  comment: state.comments.get(props.commentId, new Comment()),
});

const CommentView = connect(mapStateToProps)(PartialCommentView);
export { CommentView };
