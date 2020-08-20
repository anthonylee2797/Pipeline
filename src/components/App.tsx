import React, { useEffect, useRef, useState, createContext } from 'react';
import Pipeline from './Pipeline';
import { JobProvider } from '../Context/JobContext';

const App = () => {
  return (
    <JobProvider>
      <h1>Insert Nav Bar</h1>
      <Pipeline />
    </JobProvider>
  );
};

export default App;
