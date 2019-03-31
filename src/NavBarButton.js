import React from "react";
import PropTypes from "prop-types";
import classes from "./NavBarButton.module.scss";

const NavBarButton = props => (
  <div className={classes.buttonWrapper} onClick={props.onClick} >
    <div className={classes.button}>{props.label}</div>
  </div>
);

NavBarButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
NavBarButton.defaultProps = {
  label: "Click Here",
  onClick: () => {},
};
export default NavBarButton;
