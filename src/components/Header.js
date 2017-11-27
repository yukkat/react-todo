import logo from '../logo.svg';
import React, { Component } from 'react';

export default class Header extends Component{
    render(){
        return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )
    }
}