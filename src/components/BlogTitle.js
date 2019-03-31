import React from 'react';
import PropTypes from 'prop-types'
import classes from './BlogTitle.module.scss';

const BlogTitle = props => {
  return (
    <div className={classes.title}>{props.title}</div>
  )
}


BlogTitle.propTypes = {
  title: PropTypes.string,
};
BlogTitle.defaultProps = {
  title: '',
};

export default BlogTitle;

