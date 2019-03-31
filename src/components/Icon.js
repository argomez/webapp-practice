import React from "react";
import PropTypes from "prop-types";
import "./BaseIcon.scss";

const BaseIcon = props => (
  <span
    style={{
      fill: props.color,
      width: props.size,
      height: props.size
    }}
    {...props}
    className={`base-icon ${props.className}`}
  >
    {props.children}
  </span>
);

BaseIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const IconNavigateNext = props => (
  <BaseIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  </BaseIcon>
);

export const IconNavigateBefore = props => (
  <BaseIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </BaseIcon>
);

export default BaseIcon;
