import React from 'react';
import PropTypes from 'prop-types'
import classes from './Carousel.module.scss';
import { IconNavigateBefore } from './components/Icon';
import { IconNavigateNext } from './components/Icon';
import UserCard from './UserCard';

class Carousel extends React.Component {
  state = {
    itemIndex: 0,
  }
  navBefore = e => {
    let itemIndex = this.state.itemIndex - 1;
    itemIndex = itemIndex < 0 ? this.props.items.length - 1 : itemIndex;
    this.setState({
      itemIndex,
    })
  }
  navNext = e => {
    let itemIndex = this.state.itemIndex + 1;
    itemIndex = itemIndex > this.props.items.length - 1 ? 0 : itemIndex;
    this.setState({
      itemIndex,
    })
  }
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.nav}>
          <button onClick={this.navBefore}>
            <IconNavigateBefore size={64} color="lightgray" />
          </button>
        </div>
        <div className={classes.content}>
          <UserCard user={this.props.items[this.state.itemIndex]} />
        </div>
        <div className={classes.nav}>
          <button onClick={this.navNext}>
            <IconNavigateNext size={64} color="lightgray" />
          </button>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
}
Carousel.defaultProps = {
  items: [],
}


export default Carousel;