import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Posts from './posts/pages/Posts';
import NewPost from './posts/pages/NewPost';
import Post from './posts/pages/Post';
import Auth from './users/pages/Auth';
import UpdatePost from './posts/pages/UpdatePost';
import { AuthContext } from './shared/context/auth-context';
import UserPosts from './posts/pages/UserPosts';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Posts/>
        </Route>
        <Route path="/:userId/posts" exact>
          <UserPosts />
        </Route>
        <Route path="/posts/new" exact>
          <NewPost/>
        </Route>
        <Route path="/posts/:postId">
          <Post/>
        </Route>
        <Route path="/update/posts/:postId" exact>
          <UpdatePost/>
        </Route>
        <Redirect to ="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Posts/>
        </Route>
        <Route path="/:userId/posts" exact>
          <UserPosts />
        </Route>
        <Route path="/posts/:postId">
          <Post/>
        </Route>
        <Route path="/auth" exact>
          <Auth/>
        </Route>
        <Redirect to ="/auth" />
      </Switch>
    );
  }

  // TODO: perlu ubah route untuk individual post

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
    <Router>
      {routes}
    </Router>
    </AuthContext.Provider>
  )
}

export default App;
