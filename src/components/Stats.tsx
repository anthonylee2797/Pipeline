import React, { useEffect, useRef, useState, createContext } from 'react';
import styled from 'styled-components';
import { useJob, setJobs } from '../Context/JobContext';

const StatComponent = styled('div')`
  width: 50%;
  text-align: center;
  color: black;
`;

const Stats = () => {
  const jobs = useJob();
  let offerCount = 0;

  jobs.forEach((job) => {
    if (job.status === 'Offer') {
      offerCount++;
    }
  });

  return (
    <StatComponent>
      <h1>Pipeline | Track your Job Applications</h1>
      <h1>Total Jobs Applied: {jobs.length - 1} </h1>
      {console.log(offerCount, 'offercount', jobs.length, 'jobs.length')}
      <h1>Offer Conversion Rate: {Math.round((offerCount / (jobs.length - 1)) * 100)}%</h1>
    </StatComponent>
  );
};

export default Stats;
