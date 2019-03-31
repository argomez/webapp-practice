import React from 'react';
import PropTypes from 'prop-types'
import classes from './Comment.module.scss';

class Comment extends React.Component {

  render() {
    console.log(this.props.comment);
    const { name, email, body } = this.props.comment;
    return (
      <div className={classes.commentContainer}>
        <div className={classes.commentHeader}>
          <span className={classes.commentName}>{name}</span>
          <div className={classes.commentEmail}>{email}</div>
        </div>
        <div className={classes.commentBody}>
          {body}
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape(),
};
Comment.defaultProps = {
  comment: {},
};

export default Comment;

