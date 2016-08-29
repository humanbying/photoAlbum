import React, { Component } from 'react';
import Navbar from './Navbar'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Photo Albums</h1>
        <Navbar/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
