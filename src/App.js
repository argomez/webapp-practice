import React, { Component } from "react";
import classes from './App.module.scss'
import GitHubUsers from './views/GithubUsers';

import NavBar from './NavBar';

const Home = () => (
  <div>home</div>
);

const viewComponentMap = {
  github: GitHubUsers,
  home: Home,
}
class App extends Component {
  state = {
    view: 'github',
  }

  setCurrentView = view => {
    this.setState({
      view,
    })
  }

  render() {
    const CurrentView = viewComponentMap[this.state.view]
    return (
      <div className={classes.app}>
        <NavBar onChange={this.setCurrentView} />
        <CurrentView />
      </div>
    );
  }
}

export default App;
