import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Posts from './posts/pages/Posts';
import New from './posts/pages/New';
import Post from './posts/pages/Post';
import Login from './users/pages/Login';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Posts/>
        </Route>
        <Route path="/post/new" exact>
          <New/>
        </Route>
        <Route path="/post" exact>
          <Post/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Redirect to ="/" />
      </Switch>
    </Router>
  )
}

export default App;
