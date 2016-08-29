import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    // let { profile } = this.state;

    return (
      <div>
        <nav id = "nav" className="navbar navbar-inverse">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to='/'><b>Albums</b></Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <ul className="nav navbar-nav navbar-right container-fluid">
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
