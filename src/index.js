import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './components/Layout'
import Splash from './components/Splash'
import CreateAlbum from './components/CreateAlbum'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
    <IndexRoute component={Splash} />
    <Route path='createAlbum' component={CreateAlbum}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
