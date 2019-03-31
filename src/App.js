import React, { Component } from "react";
import classes from './App.module.scss'
import GitHubUsers from './views/GithubUsers';
import Blog from './views/Blog';

import NavBar from './NavBar';

const Home = () => (
  <div>home</div>
);

const viewComponentMap = {
  github: GitHubUsers,
  home: Home,
  blog: Blog,
}
class App extends Component {
  state = {
    view: 'blog',
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
        <NavBar onChange={this.setCurrentView} currentView={this.state.view} />
        <CurrentView />
      </div>
    );
  }
}

export default App;
