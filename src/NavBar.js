import React from 'react';
import PropTypes from 'prop-types'
import classes from './NavBar.module.scss';
import NavBarButton from './NavBarButton';

class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navBarWrapper}>
        <NavBarButton label="Home" onClick={() => {this.props.onChange('home')}} />
        <NavBarButton label="GitHub Spinner" onClick={() => {this.props.onChange('github')}} />
      </div>
    )
  }
}

NavBar.propTypes = {
  onChange: PropTypes.func,
}

export default NavBar;