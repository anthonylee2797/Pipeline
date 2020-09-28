import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { CSS_COLOR_NAMES } from '../styles/colors.js';

const JobContext = React.createContext(null);
const JobUpdateContext = React.createContext(null);

// custom hook

let randomColor = () => {
  return CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];
};

export function usePipeline() {
  return useContext(JobContext);
}

export function setPipeline() {
  return useContext(JobUpdateContext);
}

export function JobProvider({ children }) {
  const [pipeline, setPipeline] = useState({});

  return (
    <DndProvider backend={HTML5Backend}>
      <JobContext.Provider value={pipeline}>
        <JobUpdateContext.Provider value={setPipeline}>{children}</JobUpdateContext.Provider>
      </JobContext.Provider>
    </DndProvider>
  );
}
