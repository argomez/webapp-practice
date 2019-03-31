import React from 'react';
import PropTypes from 'prop-types'
import classes from './PostComment.module.scss';

class PostComment extends React.Component {
  state = {
    commentText: 'Tell us your thoughts..',
  }

  handleChange = e => {
    this.setState({commentText: e.target.value});
  }

  handleSubmit = e => {
    this.props.onSubmit({
      name: 'new post',
      body: this.state.commentText,
      email: 'andrew@gomez.dev'
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className={classes.postCommentContainer}>
        <form>
          <textarea
            className={classes.commentTextArea}
            id={`post-comment`}
            maxLength={300}
            cols={40}
            value={this.state.commentText}
            onChange={this.handleChange}
          >
          </textarea>
          <input onClick={this.handleSubmit} onChange={() => {}} value="Submit Comment" className={classes.submitComment}></input>
        </form>
      </div>
    )
  }
}

PostComment.propTypes = {
  onSubmit: PropTypes.func,
};
PostComment.defaultProps = {

};

export default PostComment;

