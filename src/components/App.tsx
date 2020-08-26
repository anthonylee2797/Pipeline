import React, { useEffect, useRef, useState, createContext } from 'react';
import Pipeline from './Pipeline';
import Stats from './Stats';
import { JobProvider } from '../Context/JobContext';

const App = () => {
  return (
    <JobProvider>
      <Stats />
      <Pipeline />
    </JobProvider>
  );
};

export default App;
