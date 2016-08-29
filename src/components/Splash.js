import React, { Component } from 'react';
// import UserStore from '../stores/UserStore';
// import UserActions from '../actions/UserActions';
import CreateAlbum from './CreateAlbum'

export default class Splash extends Component {
  render() {

    return (
      <div>
        <h1 className="text-center">
          <span>Hello from splash</span>
        </h1>
        <CreateAlbum />
      </div>
    )
  }
}
