import React, { Component } from "react";
import makeRequest from "../util/makeRequest";
import Loading from "../components/Loading";
import Carousel from "../components/Carousel";

import classes from './GitHubUsers.module.scss';

class App extends Component {
  state = {
    requestLoaded: false,
    requestFailure: false,
    userData: {}
  };

  makeGitHubRequest = () => {
    const url =
      "https://api.github.com/search/users?q=created:%3E2018-03-30&sort=followers&order=desc&page=1&per_page=10";
    makeRequest(url, {
      headers: {
        accept: "application/vnd.github.mercy-preview+json" //accept header from github v3 api
      }
    })
      .then(result => {
        this.setState({
          requestLoaded: true,
          userData: result
        });
      })
      .catch(err => {
        this.setState({
          requestFailure: true
        });
        console.log(err);
      });
  };

  componentDidMount() {
    this.makeGitHubRequest();
  }

  render() {
    return (
      <div className={classes.carouselWrapper}>
        {this.state.requestLoaded ? <Carousel items={this.state.userData.items}/> : <Loading />}
      </div>
    );
  }
}

export default App;
