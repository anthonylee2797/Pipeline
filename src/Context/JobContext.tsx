import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';

const JobContext = React.createContext(null);
const JobUpdateContext = React.createContext(null);

// custom hook
export function useJob() {
  return useContext(JobContext);
}

export function setJobs() {
  return useContext(JobUpdateContext);
}

export function JobProvider({ children }) {
  const [jobs, setJobs] = useState([
    { company: 'Amazon', status: 'Rejected', id: uuid() },
    { company: 'Microsoft', status: 'Applied', id: uuid() },
    { company: 'Apple', status: 'Applied', id: uuid() },
  ]);

  return (
    <JobContext.Provider value={jobs}>
      <JobUpdateContext.Provider value={setJobs}>{children}</JobUpdateContext.Provider>
    </JobContext.Provider>
  );
}
