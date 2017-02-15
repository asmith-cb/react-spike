import React, { Component } from 'react';
import './global-styles';

import Header from './components/Header';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
		<Login />
      </div>
    );
  }
}