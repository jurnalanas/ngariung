import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Posts from './posts/pages/Posts';
import NewPost from './posts/pages/NewPost';
import Post from './posts/pages/Post';
import Login from './users/pages/Login';
import UpdatePost from './posts/pages/UpdatePost';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Posts/>
        </Route>
        <Route path="/posts/new" exact>
          <NewPost/>
        </Route>
        <Route path="/update/posts/:postId" exact>
          <UpdatePost/>
        </Route>
        <Route path="/posts/:postId" exact>
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
