import React, { useEffect, useRef, useState, createContext } from 'react';
import Pipeline from './Pipeline';
import Stats from './Stats';
import Login from './Login';
import { JobProvider } from '../Context/JobContext';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path="/pipeline">
        <JobProvider>
          <Stats />
          <Pipeline />
        </JobProvider>
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Router>
  );
};

export default App;
