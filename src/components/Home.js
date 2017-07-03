import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppNavBar from '../pages/navbar'

class Home extends Component {
  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider>
        <div >
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="test"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />
          <AppNavBar />
        </div>
        
      </MuiThemeProvider>
    );
  }
}

export default Home;