import React from 'react';
import PropTypes from 'prop-types';
import classes from './UserCard.module.scss';
import makeRequest from "./util/makeRequest";

class UserCard extends React.Component {
  state = {
    userDataLoaded: false,
    userDataError: false,
    userData: {},
  }

  getUserData = url => {
    makeRequest(this.props.user.url).then(response => {
      this.setState({
        userDataLoaded: true,
        userData: response,
      });
    }).catch(err => {
      this.setState({
        userDataError: true,
      });
    });
  }
  componentDidMount() {
    this.getUserData(this.props.user.url);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user && (prevProps.user.url !== this.props.user.url)){

      this.setState({
        userDataLoaded: false,
        userData: {},
      });
      this.getUserData(this.props.user.url);
    }
  }

  render() {
    console.log(this.props.user)
    const user = this.props.user;
    return (
      <div className={classes.container}>
        <div className={classes.userHeader}>
          <img className={classes.avatar} alt={`${user.login}'s Avatar'`} src={user.avatar_url}></img>
          <div className={classes.userHeaderTextContent}>
            <div className={classes.userName}>{user.login}</div>
            <a className={classes.userLink} href={user.html_url}>{user.html_url}</a>
            <div>{this.state.userData.company}</div>
            <p className={classes.userBio}>
              {this.state.userData.bio}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.shape(),
}
UserCard.defaultProps = {
  user: {},
}

export default UserCard;