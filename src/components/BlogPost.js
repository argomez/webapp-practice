import React from "react";
import PropTypes from "prop-types";
import classes from "./BlogPost.module.scss";
import BlogPostHeader from "./BlogPostHeader.js";
import CommentList from "./CommentList.js";
import PostComment from './PostComment';

class BlogPost extends React.Component {
  state = {
    commentsExpanded: false
  };

  toggleComments = e => {
    this.setState(prevState => {
      return {
        commentsExpanded: !prevState.commentsExpanded
      };
    });
  };

  appendComment = comment => {
    this.props.addCommentToPost(this.props.post.id, comment);
  }

  render() {
    const { post } = this.props;
    const commentButtonString = this.state.commentsExpanded
      ? "Hide Comments"
      : `Show Comments (${post.comments.length})`;

    const extendedPost = `${post.body}${post.body}${post.body}${post.body}${
      post.body
    }${post.body}`;

    return (
      <div className={classes.postContainer}>
        <BlogPostHeader user={post.userId} title={post.title} />
        <div className={classes.postBodyWrapper}>{extendedPost}</div>
        <PostComment postId={this.props.postId} onSubmit={this.appendComment} />
        {this.state.commentsExpanded && (
          <CommentList comments={post.comments} />
        )}
        <button
          className={classes.commentToggleButton}
          onClick={this.toggleComments}
        >
          {commentButtonString}
        </button>
      </div>
    );
  }
}

BlogPost.propTypes = {
  post: PropTypes.shape(),
  addCommentToPost: PropTypes.func,
};
BlogPost.defaultProps = {
  post: {}
};

export default BlogPost;
