import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Posts from './posts/pages/Posts';
import NewPost from './posts/pages/NewPost';
import Post from './posts/pages/Post';
import Auth from './users/pages/Auth';
import UpdatePost from './posts/pages/UpdatePost';
import { AuthContext } from './shared/context/auth-context';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
    <Router>
      <Switch>
        <Route path="/" exact>
          <Posts/>
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
        <Route path="/auth" exact>
          <Auth/>
        </Route>
        <Redirect to ="/" />
      </Switch>
    </Router>
    </AuthContext.Provider>
  )
}

export default App;
