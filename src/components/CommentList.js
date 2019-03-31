import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import classes from "./CommentList.module.scss";

class CommentList extends React.Component {

  render() {
    return (
      <div className={classes.commentListContainer}>
        {this.props.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

CommentList.propTypes = {
  postId: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.shape()),
};
CommentList.defaultProps = {};

export default CommentList;
