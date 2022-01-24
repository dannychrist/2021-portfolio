// React and State Components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Components
import styled from 'styled-components'

// Content Components
import Home from './pages/components/Home';
import About from './pages/components/About';
import SinglePost from './pages/components/SinglePost';
import Post from './pages/components/Post';
import Project from './pages/components/Project';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </Router>
  )

}

export default App;
