import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Posts from './posts/pages/posts';
import New from './posts/pages/new';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Posts/>
        </Route>
        <Route path="/posts/new" exact>
          <New/>
        </Route>
        <Redirect to ="/" />
      </Switch>
    </Router>
  )
}

export default App;
