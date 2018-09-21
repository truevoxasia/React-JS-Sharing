import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appStyle from './appStyle'
import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
import { Hidden, AppBar, Toolbar, Typography } from '../node_modules/@material-ui/core';


class App extends Component {
  state = {
    isMenyorok: true
  }
  onClick = () => this.setState({ isMenyorok: !this.state.isMenyorok })

  render() {
    const { classes } = this.props;
    const { isMenyorok } = this.state;
    // this.state.isMenyorok ? "none" : "block"
    console.log(classes.appHeader)
    return (
      <div className="App">
        <header className={classNames("App-header", classes.appHeader)}>
          {/* <header className={"App-header "+ classes.appHeader}> */}
          <Hidden smDown>
            <img src={logo} className="App-logo" alt="logo" />
          </Hidden>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.onClick}>{isMenyorok ? "Show" : "Hide"}</button>
        <p className={classNames("App-intro", {
          [classes.sorok]: isMenyorok
        })} >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withStyles(appStyle)(App);
