import React from 'react';
import PropTypes from 'prop-types'
import classes from './NavBar.module.scss';
import NavBarButton from './NavBarButton';

class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.navBarWrapper}>
        <NavBarButton active={this.props.currentView === 'home'} label="Home" onClick={() => {this.props.onChange('home')}} />
        <NavBarButton active={this.props.currentView === 'github'} label="GitHub Spinner" onClick={() => {this.props.onChange('github')}} />
        <NavBarButton active={this.props.currentView === 'blog'} label="Blog" onClick={() => {this.props.onChange('blog')}} />
      </div>
    )
  }
}

NavBar.propTypes = {
  onChange: PropTypes.func,
  currentView: PropTypes.string,
}

export default NavBar;