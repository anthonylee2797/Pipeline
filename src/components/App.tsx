import React, { useEffect, useRef, useState, createContext } from 'react';
import Pipeline from './Pipeline';
import Stats from './Stats';
import Login from './Login';
import Signup from './Signup';
import { JobProvider } from '../Context/JobContext';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <JobProvider>
      <Router>
        <Switch>
          {/* Pipeline Component */}
          <Route path="/pipeline">
            <Stats />
            <Pipeline />
          </Route>

          {/* Signup Component */}
          <Route path="/signup">
            <Signup />
          </Route>

          {/* Login Component */}
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </JobProvider>
  );
};

export default App;
