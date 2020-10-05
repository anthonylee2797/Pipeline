import React, { useEffect, useRef, useState, createContext } from 'react';
import styled from 'styled-components';
import { usePipeline } from '../Context/JobContext';
import { Link, useHistory } from 'react-router-dom';

const StatComponent = styled('div')`
  width: 50%;
  text-align: center;
  color: black;
`;

const Stats = () => {
  const userInformation = usePipeline();
  const history = useHistory();
  const jobs = userInformation.jobs;
  let offerCount = 0;

  if (Object.keys(userInformation).length === 0) {
    history.push('/login')
    return null
  }

  jobs.forEach((job) => {
    if (job.status === 'Offer') {
      offerCount++;
    }
  });



  return (
    <StatComponent>
      <h1>Pipeline | Track your Job Applications</h1>
      <h1>Total Jobs Applied: {jobs.length} </h1>
      <h1>Offer Conversion Rate: {Math.round((offerCount / jobs.length) * 100)}%</h1>
    </StatComponent>
  );
};

export default Stats;
