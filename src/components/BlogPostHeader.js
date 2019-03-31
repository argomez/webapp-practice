import React from "react";
import PropTypes from "prop-types";
import classes from "./BlogPostHeader.module.scss";

class BlogPostHeader extends React.Component {
  userMock = ["", "Andrew Gomez"];

  render() {
    const { title, user } = this.props;
    const currentDate = new Date();
    // include hours ago
    const dateTime = `${currentDate.getMonth() +
      1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    return (
      <div className={classes.headerContainer}>
        <div className={classes.title}>{title};</div>
        <div className={classes.subtitleContainer}>
          <span>{this.userMock[user]}</span>
          <span className={classes.dateTime}>{dateTime}</span>
        </div>
      </div>
    );
  }
}

BlogPostHeader.propTypes = {
  user: PropTypes.number,
  title: PropTypes.string
};
BlogPostHeader.defaultProps = {
  title: "A Blog Post"
};

export default BlogPostHeader;
