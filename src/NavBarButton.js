import React from "react";
import PropTypes from "prop-types";
import classes from "./NavBarButton.module.scss";

const NavBarButton = props => (
  <div className={`${classes.buttonWrapper} ${props.active ? classes.active : ''}`} onClick={props.onClick} >
    <div className={classes.button}>{props.label}</div>
  </div>
);

NavBarButton.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
NavBarButton.defaultProps = {
  active: false,
  label: "Click Here",
  onClick: () => {},
};
export default NavBarButton;
